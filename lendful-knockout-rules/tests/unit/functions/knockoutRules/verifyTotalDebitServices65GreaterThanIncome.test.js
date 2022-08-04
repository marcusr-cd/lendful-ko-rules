const { verifyTotalDebitServices65GreaterThanIncome } = require('../../../../functions/knockoutRules');

describe('test verifyTotalDebitServices65GreaterThanIncome', () => {
  it('test verifyTotalDebitServices65GreaterThanIncome with empty parameter', async () => {
    expect(verifyTotalDebitServices65GreaterThanIncome(null, null)).toBe(true);
  });

  it('test verifyTotalDebitServices65GreaterThanIncome with no income', async () => {
    const fields = { monthly_income: 0 };
    const creditFileParsedResult = { monthlyDebitAmount: 0 };

    expect(verifyTotalDebitServices65GreaterThanIncome(fields, creditFileParsedResult)).toBe(true);
  });

  it('test verifyTotalDebitServices65GreaterThanIncome with no debit', async () => {
    const fields = { monthly_income: 4000 };
    const creditFileParsedResult = { monthlyDebitAmount: 0 };

    expect(verifyTotalDebitServices65GreaterThanIncome(fields, creditFileParsedResult)).toBe(false);
  });

  it('test verifyTotalDebitServices65GreaterThanIncome with ratio of 75%', async () => {
    const fields = { monthly_income: 100 };
    const creditFileParsedResult = { monthlyDebitAmount: 75 };

    expect(verifyTotalDebitServices65GreaterThanIncome(fields, creditFileParsedResult)).toBe(true);
  });

  it('test verifyTotalDebitServices65GreaterThanIncome with ratio of 64%', async () => {
    const fields = { monthly_income: 100 };
    const creditFileParsedResult = { monthlyDebitAmount: 64 };

    expect(verifyTotalDebitServices65GreaterThanIncome(fields, creditFileParsedResult)).toBe(false);
  });
});
