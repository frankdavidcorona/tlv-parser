import { emvTags, tvrBits, aipBits, aucBits, TagDefinition } from './tags';

export interface TLVItem {
  tag: string;
  length: number;
  value: string;
  description?: string;
  name?: string;
  details?: string[];
}

/**
 * Parses a TLV (Type-Length-Value) string
 * @param input - Hex string in TLV format
 * @returns Array of parsed TLV items
 */
export function parseTLV(input: string): TLVItem[] {
  // Validate and clean input
  if (!input) {
    throw new Error('Please enter a TLV string to parse');
  }

  // Remove any spaces from the input
  const cleanInput = input.replace(/\s/g, '');

  // Validate input contains only hex characters
  if (!/^[0-9A-Fa-f]+$/.test(cleanInput)) {
    const invalidCharIndex = cleanInput.search(/[^0-9A-Fa-f]/);
    throw new Error(
      `Invalid character found: '${cleanInput[invalidCharIndex]}' at position ${
        invalidCharIndex + 1
      }`
    );
  }

  // Validate input length is even (each hex byte is 2 characters)
  if (cleanInput.length % 2 !== 0) {
    throw new Error(
      'Input length must be even (each byte is represented by 2 hex characters)'
    );
  }

  const tlvItems: TLVItem[] = [];
  let position = 0;

  while (position < cleanInput.length) {
    // Determine tag length (1 or 2 bytes)
    let tagLength = 2; // Default to 1 byte (2 hex chars)

    // Check if we have enough characters for at least a tag
    if (position + 2 > cleanInput.length) {
      throw new Error(
        `Incomplete TLV data: missing tag at position ${position}`
      );
    }

    // Get first byte of tag
    const firstByte = cleanInput.substring(position, position + 2);
    const firstByteValue = parseInt(firstByte, 16);

    // Check if tag is 2 bytes (EMV extended tag format)
    // If bit 5 of first byte is set (0x1F), it's a 2-byte tag
    if ((firstByteValue & 0x1f) === 0x1f) {
      tagLength = 4; // 2 bytes (4 hex chars)

      // Check if we have enough characters for a 2-byte tag
      if (position + 4 > cleanInput.length) {
        throw new Error(
          `Incomplete TLV data: missing extended tag bytes at position ${position}`
        );
      }
    }

    const tag = cleanInput.substring(position, position + tagLength);
    position += tagLength;

    // Check if we have enough characters for length
    if (position + 2 > cleanInput.length) {
      throw new Error(
        `Incomplete TLV data: missing length for tag ${tag} at position ${position}`
      );
    }

    const lengthHex = cleanInput.substring(position, position + 2);
    position += 2;

    // Convert hex length to decimal
    const length = parseInt(lengthHex, 16);

    if (isNaN(length)) {
      throw new Error(
        `Invalid length value: '${lengthHex}' is not a valid hex value`
      );
    }

    // Check if we have enough characters for the value
    if (position + length * 2 > cleanInput.length) {
      throw new Error(
        `Incomplete value data for tag ${tag}: expected ${
          length * 2
        } characters but found ${cleanInput.length - position}`
      );
    }

    const value = cleanInput.substring(position, position + length * 2);
    position += length * 2;

    // Look up tag information
    const tagInfo = findTagInfo(tag);

    const tlvItem: TLVItem = {
      tag,
      length,
      value,
      name: tagInfo?.name,
      description: tagInfo?.description,
    };

    // Add special processing for known tags
    if (tag === '95') {
      // TVR
      tlvItem.details = parseTVR(value);
    } else if (tag === '82') {
      // AIP
      tlvItem.details = parseAIP(value);
    } else if (tag === '9F07') {
      // AUC
      tlvItem.details = parseAUC(value);
    }

    tlvItems.push(tlvItem);
  }

  return tlvItems;
}

/**
 * Finds tag information from the EMV tag database
 * @param tag - Tag to look up
 * @returns Tag definition or undefined if not found
 */
export function findTagInfo(tag: string): TagDefinition | undefined {
  // Convert tag to uppercase for case-insensitive comparison
  const upperTag = tag.toUpperCase();
  return emvTags.find((t) => t.tag === upperTag);
}

/**
 * Parses Terminal Verification Results (TVR)
 * @param hexValue - Hex string of TVR value
 * @returns Array of active TVR bits descriptions
 */
export function parseTVR(hexValue: string): string[] {
  return parseBitfield(hexValue, tvrBits);
}

/**
 * Parses Application Interchange Profile (AIP)
 * @param hexValue - Hex string of AIP value
 * @returns Array of active AIP bits descriptions
 */
export function parseAIP(hexValue: string): string[] {
  return parseBitfield(hexValue, aipBits);
}

/**
 * Parses Application Usage Control (AUC)
 * @param hexValue - Hex string of AUC value
 * @returns Array of active AUC bits descriptions
 */
export function parseAUC(hexValue: string): string[] {
  return parseBitfield(hexValue, aucBits);
}

/**
 * Generic bitfield parser
 * @param hexValue - Hex string to parse
 * @param bitDefinitions - Array of bit definitions
 * @returns Array of active bit descriptions
 */
function parseBitfield(
  hexValue: string,
  bitDefinitions: Array<{ byte: number; bit: number; description: string }>
): string[] {
  const result: string[] = [];

  // Convert hex to binary
  const bytes: number[] = [];
  for (let i = 0; i < hexValue.length; i += 2) {
    if (i + 2 <= hexValue.length) {
      bytes.push(parseInt(hexValue.substring(i, i + 2), 16));
    }
  }

  // Check each bit definition
  for (const bitDef of bitDefinitions) {
    const byteIndex = bitDef.byte - 1;

    // Skip if byte doesn't exist in our data
    if (byteIndex >= bytes.length) continue;

    const byte = bytes[byteIndex];
    const bitMask = 1 << (8 - bitDef.bit); // Convert bit position (1-8) to bit mask

    // If bit is set, add its description to result
    if (byte & bitMask) {
      result.push(
        `Byte ${bitDef.byte}, bit ${bitDef.bit}: ${bitDef.description}`
      );
    }
  }

  return result;
}

/**
 * Formats a TLV item for display
 * @param item - TLV item to format
 * @returns Formatted string representation
 */
export function formatTLVItem(item: TLVItem): string {
  let result = `Tag: ${item.tag}`;

  if (item.name) {
    result += ` (${item.name})`;
  }

  result += `\nLength: ${item.length} (0x${item.length
    .toString(16)
    .padStart(2, '0')})`;
  result += `\nValue: ${item.value}`;

  if (item.description) {
    result += `\nDescription: ${item.description}`;
  }

  if (item.details && item.details.length > 0) {
    result += `\nDetails:\n  ${item.details.join('\n  ')}`;
  }

  return result;
}
