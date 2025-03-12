/**
 * Example demonstrating how to search for specific tags in parsed TLV data
 */

import { parseTLV } from '../src/lib/tlv-utils';
import { emvTags } from '../src/lib/tags';

// Example TLV string with multiple tags
const tlvString =
  '9F2608123456789012345F9F360200019F2701809F10120110A00003220000000000000000000000FF9F3704123456789F0607A0000000031010';

// Parse the TLV string
const parsedData = parseTLV(tlvString);

// Function to search for tags by tag number, name, or description
function searchTags(parsedData, searchQuery) {
  if (!searchQuery || searchQuery.trim() === '') {
    return parsedData;
  }

  const query = searchQuery.toLowerCase();

  return parsedData.filter((item) => {
    const tag = item.tag.toLowerCase();
    const name = (emvTags[item.tag]?.name || '').toLowerCase();
    const description = (emvTags[item.tag]?.description || '').toLowerCase();

    return (
      tag.includes(query) || name.includes(query) || description.includes(query)
    );
  });
}

// Example 1: Search for tags by tag number
console.log('Searching for tags containing "9F":');
const tagNumberResults = searchTags(parsedData, '9F');
console.log(tagNumberResults.map((item) => item.tag));
// Output: ['9F26', '9F36', '9F27', '9F10', '9F37', '9F06']

// Example 2: Search for tags by name
console.log('\nSearching for tags with "cryptogram" in the name:');
const nameResults = searchTags(parsedData, 'cryptogram');
console.log(
  nameResults.map((item) => ({
    tag: item.tag,
    name: emvTags[item.tag]?.name,
  }))
);
// Output: [{ tag: '9F26', name: 'Application Cryptogram' }]

// Example 3: Search for tags by description
console.log('\nSearching for tags related to "terminal":');
const descriptionResults = searchTags(parsedData, 'terminal');
console.log(
  descriptionResults.map((item) => ({
    tag: item.tag,
    name: emvTags[item.tag]?.name,
    description: emvTags[item.tag]?.description,
  }))
);
// Output may include tags like 9F37 (Unpredictable Number) which mentions terminal in its description

// Example 4: No results case
console.log('\nSearching for non-existent tag:');
const noResults = searchTags(parsedData, 'xyz123');
console.log(noResults.length === 0 ? 'No results found' : noResults);
// Output: No results found

// Example 5: Case insensitive search
console.log('\nDemonstrating case insensitivity:');
const lowerCaseResults = searchTags(parsedData, 'application');
const upperCaseResults = searchTags(parsedData, 'APPLICATION');
console.log(`Lower case search results: ${lowerCaseResults.length}`);
console.log(`Upper case search results: ${upperCaseResults.length}`);
// Output: Both searches should return the same number of results
