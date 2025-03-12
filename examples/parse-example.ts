import { parseTLV, formatTLVItem, findTagInfo, parseTVR, parseAIP, parseAUC } from '../src/lib/tlv-utils';

/**
 * Example 1: Basic TLV parsing
 */
function basicParsingExample() {
  console.log('Example 1: Basic TLV Parsing');
  console.log('----------------------------');
  
  const tlvString = '9F2608123456789012345F5F2A020840';
  console.log(`Input TLV string: ${tlvString}`);
  
  try {
    const parsedData = parseTLV(tlvString);
    console.log(`\nParsed ${parsedData.length} TLV items:`);
    
    parsedData.forEach((item, index) => {
      console.log(`\nItem ${index + 1}:`);
      console.log(formatTLVItem(item));
    });
  } catch (error) {
    console.error('Error parsing TLV data:', error);
  }
}

/**
 * Example 2: Tag lookup
 */
function tagLookupExample() {
  console.log('\n\nExample 2: Tag Lookup');
  console.log('-------------------');
  
  const tags = ['9F26', '5F2A', '95', '82', '9F07'];
  
  tags.forEach(tag => {
    const tagInfo = findTagInfo(tag);
    console.log(`\nTag: ${tag}`);
    
    if (tagInfo) {
      console.log(`Name: ${tagInfo.name}`);
      console.log(`Description: ${tagInfo.description}`);
      console.log(`Format: ${tagInfo.format || 'Not specified'}`);
      console.log(`Length: ${tagInfo.minLength || 0}-${tagInfo.maxLength || 'n'}`);
    } else {
      console.log('Tag not found in database');
    }
  });
}

/**
 * Example 3: Specialized field parsing
 */
function specializedFieldParsingExample() {
  console.log('\n\nExample 3: Specialized Field Parsing');
  console.log('----------------------------------');
  
  // Terminal Verification Results (TVR)
  const tvrValue = '8000048000';
  console.log(`\nTVR Value: ${tvrValue}`);
  const tvrDetails = parseTVR(tvrValue);
  console.log('TVR Details:');
  tvrDetails.forEach(detail => console.log(`- ${detail}`));
  
  // Application Interchange Profile (AIP)
  const aipValue = '1C00';
  console.log(`\nAIP Value: ${aipValue}`);
  const aipDetails = parseAIP(aipValue);
  console.log('AIP Details:');
  aipDetails.forEach(detail => console.log(`- ${detail}`));
  
  // Application Usage Control (AUC)
  const aucValue = 'FF00';
  console.log(`\nAUC Value: ${aucValue}`);
  const aucDetails = parseAUC(aucValue);
  console.log('AUC Details:');
  aucDetails.forEach(detail => console.log(`- ${detail}`));
}

/**
 * Example 4: Error handling
 */
function errorHandlingExample() {
  console.log('\n\nExample 4: Error Handling');
  console.log('----------------------');
  
  const invalidInputs = [
    { input: '9F26', description: 'Incomplete TLV data' },
    { input: '9F260X123456789012345F', description: 'Invalid hex character' },
    { input: '9F2608123', description: 'Incomplete value' },
    { input: '9F260G123456789012345F', description: 'Invalid length value' }
  ];
  
  invalidInputs.forEach(({ input, description }) => {
    console.log(`\nTrying to parse: ${input} (${description})`);
    try {
      parseTLV(input);
      console.log('Parsing succeeded (unexpected)');
    } catch (error) {
      console.log(`Error (expected): ${error instanceof Error ? error.message : String(error)}`);
    }
  });
}

// Run all examples
function runAllExamples() {
  basicParsingExample();
  tagLookupExample();
  specializedFieldParsingExample();
  errorHandlingExample();
}

// Execute examples
runAllExamples(); 