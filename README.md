# EMV TLV Parser

A modern web-based tool for parsing and analyzing EMV (Europay, Mastercard, and Visa) TLV (Type-Length-Value) data with detailed tag information and specialized field parsing.

![EMV TLV Parser Screenshot](/public/images/tlv-parser.png)

## Features

- **Advanced TLV Parsing**: Parse EMV data in TLV format with support for both 1-byte and 2-byte tags
- **Comprehensive EMV Tag Database**: Includes detailed information for 50+ standard EMV tags
- **Specialized Field Parsing**:
  - Terminal Verification Results (TVR)
  - Application Interchange Profile (AIP)
  - Application Usage Control (AUC)
- **User-Friendly Interface**:
  - Structured and raw data views
  - **Tag search functionality** to quickly find specific tags in parsed data
  - Error highlighting with position indicators
  - Responsive design for all device sizes
- **Built with Modern Technologies**:
  - Next.js 14+
  - React 19
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components

## Demo

Try the live demo: [EMV TLV Parser Demo](https://tlv-parser.vercel.app)

## Installation

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone https://github.com/frankdavidcorona/tlv-parser.git
cd tlv-parser
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Basic Parsing

Enter a TLV string in the input field and click "Parse". For example:

```
9F2608123456789012345F
```

This will parse the string and display the results in a structured format:

- Tag: 9F26 (Application Cryptogram)
- Length: 8
- Value: 123456789012345F

### Searching for Specific Tags

After parsing a TLV string, you can use the search input in the structured view to filter for specific tags:

1. Enter your search term in the search box
2. Results will be filtered in real-time as you type
3. Search works across tag numbers, tag names, and descriptions

This is particularly useful when working with large TLV strings containing many tags.

### Understanding TLV Format

EMV data is encoded in Type-Length-Value (TLV) format:

- **Type (Tag)**: Identifies the data element (1 or 2 bytes)
- **Length**: Indicates the length of the value field in bytes (1 byte)
- **Value**: The actual data (variable length as specified by the Length field)

For example, in `9F2608123456789012345F`:

- `9F26` is the tag (Application Cryptogram)
- `08` is the length (8 bytes)
- `123456789012345F` is the value (8 bytes = 16 hex characters)

### Specialized Field Parsing

The parser automatically detects and provides detailed information for specialized EMV fields:

- **TVR (Tag 95)**: Shows the status of different terminal verification functions
- **AIP (Tag 82)**: Indicates the capabilities of the card
- **AUC (Tag 9F07)**: Shows the issuer's restrictions on geographic usage and services

### Error Handling

The parser provides detailed error messages for invalid input, including:

- Invalid characters (non-hex)
- Incomplete TLV data
- Invalid length values
- Odd number of hex characters

## Project Structure

```
src/
├── app/
│   └── page.tsx           # Main application page
├── components/
│   ├── ui/                # shadcn/ui components
│   └── string-input.tsx   # TLV input and display component
└── lib/
    ├── tags.ts            # EMV tag definitions and bit fields
    └── tlv-utils.ts       # TLV parsing utilities
```

## Technical Details

### TLV Parsing Logic

The parser handles both standard (1-byte) and extended (2-byte) EMV tags:

- Standard tags: 1 byte (2 hex characters)
- Extended tags: First byte has bits b5-b1 set to '11111', followed by a second byte

The length field is interpreted as a hexadecimal value indicating the number of bytes (not characters) in the value field.

### EMV Tag Database

The application includes a comprehensive database of EMV tags based on EMV specifications, including:

- Tag ID
- Name
- Description
- Format
- Minimum and maximum lengths

### Bit Field Parsing

For specialized fields (TVR, AIP, AUC), the parser analyzes individual bits and provides human-readable descriptions of their meanings according to EMV specifications.

## Examples

Check out the [examples directory](/examples) for code samples demonstrating how to use the TLV parser programmatically:

- Basic TLV parsing
- Tag lookup
- Specialized field parsing (TVR, AIP, AUC)
- Error handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [node-emv](https://github.com/mhdnamvar/node-emv) for EMV parsing concepts
- EMV tag definitions based on EMV Co. specifications
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Contact

Your Name - [@chaplindev](https://twitter.com/chaplindev) - frank.corona@pm.me

Project Link: [https://github.com/frankdavidcorona/tlv-parser](https://github.com/frankdavidcorona/tlv-parser)
