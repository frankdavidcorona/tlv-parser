export interface TagDefinition {
  tag: string;
  name: string;
  description: string;
  format?: string;
  template?: string;
  minLength?: number;
  maxLength?: number;
}

// EMV tag definitions based on EMV specifications
export const emvTags: TagDefinition[] = [
  {
    tag: '4F',
    name: 'Application Identifier (AID)',
    description: 'Identifies the application as described in ISO/IEC 7816-5',
    format: 'b',
    minLength: 5,
    maxLength: 16,
  },
  {
    tag: '50',
    name: 'Application Label',
    description: 'Mnemonic associated with the AID according to ISO/IEC 7816-5',
    format: 'ans',
    minLength: 1,
    maxLength: 16,
  },
  {
    tag: '57',
    name: 'Track 2 Equivalent Data',
    description:
      'Contains the data elements of track 2 according to ISO/IEC 7813, excluding start sentinel, end sentinel, and LRC',
    format: 'b',
    minLength: 0,
    maxLength: 19,
  },
  {
    tag: '5A',
    name: 'Application Primary Account Number (PAN)',
    description: 'Valid cardholder account number',
    format: 'cn',
    minLength: 0,
    maxLength: 19,
  },
  {
    tag: '5F20',
    name: 'Cardholder Name',
    description: 'Indicates cardholder name according to ISO 7813',
    format: 'ans',
    minLength: 2,
    maxLength: 26,
  },
  {
    tag: '5F24',
    name: 'Application Expiration Date',
    description: 'Date after which application expires',
    format: 'n',
    minLength: 3,
    maxLength: 3,
  },
  {
    tag: '5F25',
    name: 'Application Effective Date',
    description: 'Date from which the application may be used',
    format: 'n',
    minLength: 3,
    maxLength: 3,
  },
  {
    tag: '5F28',
    name: 'Issuer Country Code',
    description: 'Indicates the country of the issuer according to ISO 3166',
    format: 'n',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '5F2A',
    name: 'Transaction Currency Code',
    description:
      'Indicates the currency code of the transaction according to ISO 4217',
    format: 'n',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '5F2D',
    name: 'Language Preference',
    description:
      '1–4 languages stored in order of preference, each represented by 2 alphabetical characters according to ISO 639',
    format: 'an',
    minLength: 2,
    maxLength: 8,
  },
  {
    tag: '5F30',
    name: 'Service Code',
    description:
      'Service code as defined in ISO/IEC 7813 for track 1 and track 2',
    format: 'n',
    minLength: 3,
    maxLength: 3,
  },
  {
    tag: '5F34',
    name: 'Application Primary Account Number (PAN) Sequence Number',
    description: 'Identifies and differentiates cards with the same PAN',
    format: 'n',
    minLength: 1,
    maxLength: 1,
  },
  {
    tag: '82',
    name: 'Application Interchange Profile',
    description:
      'Indicates the capabilities of the card to support specific functions in the application',
    format: 'b',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '84',
    name: 'Dedicated File (DF) Name',
    description: 'Identifies the name of the DF as described in ISO/IEC 7816-4',
    format: 'b',
    minLength: 5,
    maxLength: 16,
  },
  {
    tag: '8A',
    name: 'Authorization Response Code',
    description: 'Code that defines the disposition of a transaction',
    format: 'an',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '8C',
    name: 'Card Risk Management Data Object List 1 (CDOL1)',
    description:
      'List of data objects (tag and length) to be passed to the ICC in the first GENERATE AC command',
    format: 'b',
    minLength: 0,
    maxLength: 252,
  },
  {
    tag: '8D',
    name: 'Card Risk Management Data Object List 2 (CDOL2)',
    description:
      'List of data objects (tag and length) to be passed to the ICC in the second GENERATE AC command',
    format: 'b',
    minLength: 0,
    maxLength: 252,
  },
  {
    tag: '8E',
    name: 'Cardholder Verification Method (CVM) List',
    description:
      'Identifies a method of verification of the cardholder supported by the application',
    format: 'b',
    minLength: 0,
    maxLength: 252,
  },
  {
    tag: '8F',
    name: 'Certification Authority Public Key Index',
    description:
      "Identifies the certification authority's public key in conjunction with the RID",
    format: 'b',
    minLength: 1,
    maxLength: 1,
  },
  {
    tag: '90',
    name: 'Issuer Public Key Certificate',
    description: 'Issuer public key certified by a certification authority',
    format: 'b',
    minLength: 0,
    maxLength: 0,
  },
  {
    tag: '91',
    name: 'Issuer Authentication Data',
    description: 'Data sent to the ICC for online issuer authentication',
    format: 'b',
    minLength: 0,
    maxLength: 16,
  },
  {
    tag: '92',
    name: 'Issuer Public Key Remainder',
    description: 'Remaining digits of the Issuer Public Key Modulus',
    format: 'b',
    minLength: 0,
    maxLength: 0,
  },
  {
    tag: '93',
    name: 'Signed Static Application Data',
    description: 'Digital signature on critical application parameters for SDA',
    format: 'b',
    minLength: 0,
    maxLength: 0,
  },
  {
    tag: '94',
    name: 'Application File Locator (AFL)',
    description:
      'Indicates the location (SFI, range of records) of the AEFs related to a given application',
    format: 'b',
    minLength: 0,
    maxLength: 252,
  },
  {
    tag: '95',
    name: 'Terminal Verification Results',
    description: 'Status of the different functions as seen from the terminal',
    format: 'b',
    minLength: 5,
    maxLength: 5,
  },
  {
    tag: '9A',
    name: 'Transaction Date',
    description: 'Local date that the transaction was authorized',
    format: 'n',
    minLength: 3,
    maxLength: 3,
  },
  {
    tag: '9B',
    name: 'Transaction Status Information',
    description: 'Indicates the functions performed in a transaction',
    format: 'b',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '9C',
    name: 'Transaction Type',
    description:
      'Indicates the type of financial transaction, represented by the first two digits of ISO 8583:1987 Processing Code',
    format: 'n',
    minLength: 1,
    maxLength: 1,
  },
  {
    tag: '9F02',
    name: 'Amount, Authorized (Numeric)',
    description: 'Authorized amount of the transaction (excluding adjustments)',
    format: 'n',
    minLength: 6,
    maxLength: 6,
  },
  {
    tag: '9F03',
    name: 'Amount, Other (Numeric)',
    description:
      'Secondary amount associated with the transaction representing a cashback amount',
    format: 'n',
    minLength: 6,
    maxLength: 6,
  },
  {
    tag: '9F06',
    name: 'Application Identifier (AID) - terminal',
    description: 'Identifies the application as described in ISO/IEC 7816-5',
    format: 'b',
    minLength: 5,
    maxLength: 16,
  },
  {
    tag: '9F07',
    name: 'Application Usage Control',
    description:
      "Indicates issuer's specified restrictions on the geographic usage and services allowed for the application",
    format: 'b',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '9F08',
    name: 'Application Version Number',
    description:
      'Version number assigned by the payment system for the application',
    format: 'b',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '9F09',
    name: 'Application Version Number',
    description:
      'Version number assigned by the payment system for the application',
    format: 'b',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '9F0D',
    name: 'Issuer Action Code - Default',
    description:
      "Specifies the issuer's conditions that cause a transaction to be rejected if it might have been approved online, but the terminal is unable to process the transaction online",
    format: 'b',
    minLength: 5,
    maxLength: 5,
  },
  {
    tag: '9F0E',
    name: 'Issuer Action Code - Denial',
    description:
      "Specifies the issuer's conditions that cause the denial of a transaction without attempt to go online",
    format: 'b',
    minLength: 5,
    maxLength: 5,
  },
  {
    tag: '9F0F',
    name: 'Issuer Action Code - Online',
    description:
      "Specifies the issuer's conditions that cause a transaction to be transmitted online",
    format: 'b',
    minLength: 5,
    maxLength: 5,
  },
  {
    tag: '9F10',
    name: 'Issuer Application Data',
    description:
      'Contains proprietary application data for transmission to the issuer in an online transaction',
    format: 'b',
    minLength: 0,
    maxLength: 32,
  },
  {
    tag: '9F11',
    name: 'Issuer Code Table Index',
    description:
      'Indicates the code table according to ISO/IEC 8859 for displaying the Application Preferred Name',
    format: 'n',
    minLength: 1,
    maxLength: 1,
  },
  {
    tag: '9F12',
    name: 'Application Preferred Name',
    description: 'Preferred mnemonic associated with the AID',
    format: 'ans',
    minLength: 1,
    maxLength: 16,
  },
  {
    tag: '9F1A',
    name: 'Terminal Country Code',
    description:
      'Indicates the country of the terminal, represented according to ISO 3166',
    format: 'n',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '9F1F',
    name: 'Track 1 Discretionary Data',
    description:
      'Discretionary data coded in track 1 according to ISO/IEC 7813',
    format: 'ans',
    minLength: 0,
    maxLength: 0,
  },
  {
    tag: '9F21',
    name: 'Transaction Time',
    description: 'Local time that the transaction was authorized',
    format: 'n',
    minLength: 3,
    maxLength: 3,
  },
  {
    tag: '9F26',
    name: 'Application Cryptogram',
    description:
      'Cryptogram returned by the ICC in response of the GENERATE AC command',
    format: 'b',
    minLength: 8,
    maxLength: 8,
  },
  {
    tag: '9F27',
    name: 'Cryptogram Information Data',
    description:
      'Indicates the type of cryptogram and the actions to be performed by the terminal',
    format: 'b',
    minLength: 1,
    maxLength: 1,
  },
  {
    tag: '9F33',
    name: 'Terminal Capabilities',
    description:
      'Indicates the card data input, CVM, and security capabilities of the terminal',
    format: 'b',
    minLength: 3,
    maxLength: 3,
  },
  {
    tag: '9F34',
    name: 'Cardholder Verification Method (CVM) Results',
    description: 'Indicates the results of the last CVM performed',
    format: 'b',
    minLength: 3,
    maxLength: 3,
  },
  {
    tag: '9F35',
    name: 'Terminal Type',
    description:
      'Indicates the environment of the terminal, its communications capability, and its operational control',
    format: 'n',
    minLength: 1,
    maxLength: 1,
  },
  {
    tag: '9F36',
    name: 'Application Transaction Counter (ATC)',
    description:
      'Counter maintained by the application in the ICC (incrementing the ATC is managed by the ICC)',
    format: 'b',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '9F37',
    name: 'Unpredictable Number',
    description:
      'Value to provide variability and uniqueness to the generation of a cryptogram',
    format: 'b',
    minLength: 4,
    maxLength: 4,
  },
  {
    tag: '9F38',
    name: 'Processing Options Data Object List (PDOL)',
    description:
      'Contains a list of terminal resident data objects (tags and lengths) needed by the ICC in processing the GET PROCESSING OPTIONS command',
    format: 'b',
    minLength: 0,
    maxLength: 252,
  },
  {
    tag: '9F39',
    name: 'Point-of-Service (POS) Entry Mode',
    description:
      'Indicates the method by which the PAN was entered, according to the first two digits of the ISO 8583:1987 POS Entry Mode',
    format: 'n',
    minLength: 1,
    maxLength: 1,
  },
  {
    tag: '9F40',
    name: 'Additional Terminal Capabilities',
    description:
      'Indicates the data input and output capabilities of the terminal',
    format: 'b',
    minLength: 5,
    maxLength: 5,
  },
  {
    tag: '9F41',
    name: 'Transaction Sequence Counter',
    description:
      'Counter maintained by the terminal that is incremented by one for each transaction',
    format: 'n',
    minLength: 2,
    maxLength: 4,
  },
  {
    tag: '9F42',
    name: 'Application Currency Code',
    description:
      'Indicates the currency in which the account is managed according to ISO 4217',
    format: 'n',
    minLength: 2,
    maxLength: 2,
  },
  {
    tag: '9F4E',
    name: 'Merchant Name and Location',
    description: 'Indicates the name and location of the merchant',
    format: 'ans',
    minLength: 0,
    maxLength: 45,
  },
];

// TVR (Terminal Verification Results) bit descriptions
export const tvrBits = [
  { byte: 1, bit: 8, description: 'RFU' },
  { byte: 1, bit: 7, description: 'RFU' },
  { byte: 1, bit: 6, description: 'RFU' },
  { byte: 1, bit: 5, description: 'RFU' },
  { byte: 1, bit: 4, description: 'RFU' },
  { byte: 1, bit: 3, description: 'RFU' },
  { byte: 1, bit: 2, description: 'RFU' },
  {
    byte: 1,
    bit: 1,
    description: 'Offline data authentication was not performed',
  },

  { byte: 2, bit: 8, description: 'SDA failed' },
  { byte: 2, bit: 7, description: 'CDA failed' },
  { byte: 2, bit: 6, description: 'DDA failed' },
  { byte: 2, bit: 5, description: 'Card appears on terminal exception file' },
  {
    byte: 2,
    bit: 4,
    description: 'DDA not performed - card number not in certificate',
  },
  {
    byte: 2,
    bit: 3,
    description: 'DDA not performed - card number not in certificate',
  },
  {
    byte: 2,
    bit: 2,
    description: 'DDA not performed - card number not in certificate',
  },
  {
    byte: 2,
    bit: 1,
    description: 'DDA not performed - card number not in certificate',
  },

  {
    byte: 3,
    bit: 8,
    description: 'ICC and terminal have different application versions',
  },
  { byte: 3, bit: 7, description: 'Expired application' },
  { byte: 3, bit: 6, description: 'Application not yet effective' },
  {
    byte: 3,
    bit: 5,
    description: 'Requested service not allowed for card product',
  },
  { byte: 3, bit: 4, description: 'New card' },
  { byte: 3, bit: 3, description: 'RFU' },
  { byte: 3, bit: 2, description: 'RFU' },
  { byte: 3, bit: 1, description: 'RFU' },

  {
    byte: 4,
    bit: 8,
    description: 'Cardholder verification was not successful',
  },
  { byte: 4, bit: 7, description: 'Unrecognised CVM' },
  { byte: 4, bit: 6, description: 'PIN Try Limit exceeded' },
  {
    byte: 4,
    bit: 5,
    description: 'PIN entry required and PIN pad not present or not working',
  },
  {
    byte: 4,
    bit: 4,
    description: 'PIN entry required, PIN pad present, but PIN was not entered',
  },
  { byte: 4, bit: 3, description: 'Online PIN entered' },
  { byte: 4, bit: 2, description: 'RFU' },
  { byte: 4, bit: 1, description: 'RFU' },

  { byte: 5, bit: 8, description: 'Transaction exceeds floor limit' },
  { byte: 5, bit: 7, description: 'Lower consecutive offline limit exceeded' },
  { byte: 5, bit: 6, description: 'Upper consecutive offline limit exceeded' },
  {
    byte: 5,
    bit: 5,
    description: 'Transaction selected randomly for online processing',
  },
  { byte: 5, bit: 4, description: 'Merchant forced transaction online' },
  { byte: 5, bit: 3, description: 'RFU' },
  { byte: 5, bit: 2, description: 'RFU' },
  { byte: 5, bit: 1, description: 'RFU' },
];

// AIP (Application Interchange Profile) bit descriptions
export const aipBits = [
  { byte: 1, bit: 8, description: 'RFU' },
  { byte: 1, bit: 7, description: 'SDA supported' },
  { byte: 1, bit: 6, description: 'DDA supported' },
  { byte: 1, bit: 5, description: 'Cardholder verification is supported' },
  {
    byte: 1,
    bit: 4,
    description: 'Terminal risk management is to be performed',
  },
  { byte: 1, bit: 3, description: 'Issuer authentication is supported' },
  { byte: 1, bit: 2, description: 'RFU' },
  { byte: 1, bit: 1, description: 'CDA supported' },

  { byte: 2, bit: 8, description: 'RFU' },
  { byte: 2, bit: 7, description: 'RFU' },
  { byte: 2, bit: 6, description: 'RFU' },
  { byte: 2, bit: 5, description: 'RFU' },
  { byte: 2, bit: 4, description: 'RFU' },
  { byte: 2, bit: 3, description: 'RFU' },
  { byte: 2, bit: 2, description: 'RFU' },
  { byte: 2, bit: 1, description: 'RFU' },
];

// AUC (Application Usage Control) bit descriptions
export const aucBits = [
  { byte: 1, bit: 8, description: 'Valid for domestic cash transactions' },
  { byte: 1, bit: 7, description: 'Valid for international cash transactions' },
  { byte: 1, bit: 6, description: 'Valid for domestic goods' },
  { byte: 1, bit: 5, description: 'Valid for international goods' },
  { byte: 1, bit: 4, description: 'Valid for domestic services' },
  { byte: 1, bit: 3, description: 'Valid for international services' },
  { byte: 1, bit: 2, description: 'Valid at ATMs' },
  { byte: 1, bit: 1, description: 'Valid at terminals other than ATMs' },

  { byte: 2, bit: 8, description: 'Domestic cashback allowed' },
  { byte: 2, bit: 7, description: 'International cashback allowed' },
  { byte: 2, bit: 6, description: 'RFU' },
  { byte: 2, bit: 5, description: 'RFU' },
  { byte: 2, bit: 4, description: 'RFU' },
  { byte: 2, bit: 3, description: 'RFU' },
  { byte: 2, bit: 2, description: 'RFU' },
  { byte: 2, bit: 1, description: 'RFU' },
];
