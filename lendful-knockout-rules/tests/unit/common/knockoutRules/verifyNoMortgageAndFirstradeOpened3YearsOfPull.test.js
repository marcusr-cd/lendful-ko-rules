const { format, addYears } = require('date-fns');
const {
  verifyNoMortgage,
  getTradeFirstOpened,
  verifyTradeFirstOpenedWithin3YearsFromToday,
} = require('../../../../common/knockoutRules');
const {
  humanReadableWithTradeFirstOpened,
  humanReadableWithoutTradeFirstOpened,
} = require('../../resources/humanReadable');

describe('test getTradeFirstOpened', () => {
  it('getTradeFirstOpened without content', async () => {
    expect(getTradeFirstOpened(null)).toBe('');
  });

  it('getTradeFirstOpened with trade first opened', async () => {
    expect(getTradeFirstOpened(humanReadableWithTradeFirstOpened)).toBe('Nov2009');
  });

  it('getTradeFirstOpened without trade first opened', async () => {
    expect(getTradeFirstOpened(humanReadableWithoutTradeFirstOpened)).toBe('');
  });
});

describe('test verifyTradeFirstOpenedWithin3YearsFromToday', () => {
  it('verifyTradeFirstOpenedWithin3YearsFromToday with empty parameter', async () => {
    expect(verifyTradeFirstOpenedWithin3YearsFromToday(null)).toBe(false);
  });

  it('verifyTradeFirstOpenedWithin3YearsFromToday date greater than 3 years', async () => {
    const now = new Date();
    const tradeFirstOpened = format(addYears(now, -4), 'LLLLyyyy');
    expect(verifyTradeFirstOpenedWithin3YearsFromToday(tradeFirstOpened)).toBe(false);
  });

  it('verifyTradeFirstOpenedWithin3YearsFromToday date within 3 years', async () => {
    const now = new Date();
    const tradeFirstOpened = format(addYears(now, -1), 'LLLLyyyy');
    expect(verifyTradeFirstOpenedWithin3YearsFromToday(tradeFirstOpened)).toBe(true);
  });
});

describe('test verifyNoMortgage', () => {
  it('test verifyNoMortgage with empty parameters', async () => {
    expect(verifyNoMortgage(null)).toBe(true);
  });

  it('test verifyNoMortgage with no mortgages', async () => {
    const creditData = {
      CreditSummary: {
        NumberOfMortgageTrades: 0,
      },
    };
    expect(verifyNoMortgage(creditData)).toBe(true);
  });

  it('test verifyNoMortgage with 1 mortgage', async () => {
    const creditData = {
      CreditSummary: {
        NumberOfMortgageTrades: 1,
      },
    };
    expect(verifyNoMortgage(creditData)).toBe(false);
  });
});
