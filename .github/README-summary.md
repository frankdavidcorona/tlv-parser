# EMV TLV Parser

> A specialized tool for payment systems developers to parse, analyze, and debug EMV (Europay, Mastercard, and Visa) TLV (Type-Length-Value) data with comprehensive tag information and bit-level field analysis.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14%2B-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## 🚀 Features

- **EMV-Compliant Parsing**: Full support for EMV tag formats including extended (2-byte) tags
- **Rich Tag Database**: 50+ EMV tags with names, descriptions, and format specifications
- **Specialized EMV Field Analysis**:
  - Terminal Verification Results (TVR) bit-level interpretation
  - Application Interchange Profile (AIP) capabilities breakdown
  - Application Usage Control (AUC) restrictions analysis
- **Developer-Friendly Interface**: Structured and raw data views with error highlighting

## 🔍 Preview

![EMV TLV Parser Screenshot](/public/images/tlv-parser.png)

## 🔗 Links

- [Live Demo](https://tlv-parser.vercel.app)
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
import { parseTLV, parseTVR, parseAIP } from '@/lib/tlv-utils';

// Parse EMV TLV data
const tlvString = '9F2608123456789012345F5F2A0208409505800004800082027C00';
const parsedData = parseTLV(tlvString);

// Analyze specific EMV fields
const tvrValue = '8000048000';
const tvrDetails = parseTVR(tvrValue);
// Output: Detailed breakdown of terminal verification results
``` 