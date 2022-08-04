const { verifyDerogatoryCredit } = require('../../../../functions/knockoutRules');

describe('Test verifyDerogatoryCredit', () => {
  it('test verifyDerogatoryCredit empty parameter', async () => {
    expect(verifyDerogatoryCredit(null)).toBe(false);
  });

  it('test verifyDerogatoryCredit without derogatory credit', async () => {
    const creditData = { hasDerogatoryCredit: false };

    expect(verifyDerogatoryCredit(creditData)).toBe(false);
  });

  it('test verifyDerogatoryCredit with derogatory credit', async () => {
    const creditData = { hasDerogatoryCredit: true };

    expect(verifyDerogatoryCredit(creditData)).toBe(true);
  });
});
