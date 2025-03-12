# EMV TLV Parser

> A modern web-based tool for parsing and analyzing EMV (Europay, Mastercard, and Visa) TLV (Type-Length-Value) data with detailed tag information and specialized field parsing.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14%2B-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## 🚀 Features

- **Advanced TLV Parsing**: Support for both 1-byte and 2-byte EMV tags
- **Comprehensive EMV Tag Database**: 50+ standard EMV tags with detailed information
- **Specialized Field Parsing**: TVR, AIP, and AUC bit-level analysis
- **User-Friendly Interface**: Structured and raw data views with error highlighting

## 🔍 Preview

![EMV TLV Parser Screenshot](/public/images/tlv-parser.png)

## 🔗 Links

- [Live Demo](https://emv-tlv-parser.vercel.app)
- [Documentation](https://github.com/frankdavidcorona/tlv-parser#readme)
- [Examples](/examples)

## 💻 Quick Start

```bash
# Clone the repository
git clone https://github.com/frankdavidcorona/tlv-parser.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📝 Example Usage

```typescript
import { parseTLV } from '@/lib/tlv-utils';

// Parse EMV TLV data
const tlvString = '9F2608123456789012345F5F2A020840';
const parsedData = parseTLV(tlvString);

console.log(parsedData);
// Output: Array of parsed TLV items with tag information and descriptions
``` 