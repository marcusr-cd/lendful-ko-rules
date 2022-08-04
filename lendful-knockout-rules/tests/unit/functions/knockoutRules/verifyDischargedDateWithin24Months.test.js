const { subMonths } = require('date-fns');
const { verifyDischargedDateWithin24Months } = require('../../../../functions/knockoutRules');

describe('test verifyDischargedDateWithin24Months', () => {
  it('test verifyDischargedDateWithin24Months with empty parameter', async () => {
    expect(verifyDischargedDateWithin24Months(null)).toBe(false);
  });

  it('test verifyDischargedDateWithin24Months greater than 24 months', async () => {
    const date = subMonths(new Date(), 30);
    const creditData = { bankruptcyDateDischarged: date };

    expect(verifyDischargedDateWithin24Months(creditData)).toBe(false);
  });

  it('test verifyDischargedDateWithin24Months within 24 months', async () => {
    const date = subMonths(new Date(), 1);
    const creditData = { bankruptcyDateDischarged: date };

    expect(verifyDischargedDateWithin24Months(creditData)).toBe(true);
  });
});
