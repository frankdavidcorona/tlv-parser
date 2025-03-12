## Description

Please include a summary of the change and which issue is fixed. Please also include relevant motivation and context.

Fixes # (issue)

## Type of change

Please delete options that are not relevant.

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] EMV tag database enhancement
- [ ] TLV parsing improvement

## EMV/TLV Context

If applicable, please provide context about the EMV/TLV aspects of this change:
- EMV tags affected
- TLV parsing improvements
- Compliance with EMV specifications

## How Has This Been Tested?

Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce.

- [ ] Test A (e.g., "Parsed complex TLV string with nested tags")
- [ ] Test B (e.g., "Verified TVR bit field parsing")

## Test Data

If applicable, provide sample TLV data used for testing:

```
9F2608123456789012345F5F2A020840
```

## Checklist:

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes 