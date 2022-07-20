const { verifyBankruptcy } = require('../../../../common/knockoutRules');

describe('test verifyBankruptcy', () => {
  it('test verifyBankruptcy', async () => {
    expect(verifyBankruptcy(null)).toBe(false);
  });

  it('test verifyBankruptcy without Bankruptcy', async () => {
    const creditData = { bankruptcy: false };
    expect(verifyBankruptcy(creditData)).toBe(false);
  });

  it('test verifyBankruptcy with Bankruptcy', async () => {
    const creditData = { bankruptcy: true };
    expect(verifyBankruptcy(creditData)).toBe(true);
  });
});
