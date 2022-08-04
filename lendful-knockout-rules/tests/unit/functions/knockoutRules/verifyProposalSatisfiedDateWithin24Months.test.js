const { subMonths } = require('date-fns');
const { verifyProposalSatisfiedDateWithin24Months } = require('../../../../functions/knockoutRules');

describe('test verifyProposalSatisfiedDateWithin24Months', () => {
  it('test verifyProposalSatisfiedDateWithin24Months without parameter', async () => {
    expect(verifyProposalSatisfiedDateWithin24Months(null)).toBe(false);
  });

  it('test verifyProposalSatisfiedDateWithin24Months greater than 24 months', async () => {
    const date = subMonths(new Date(), 30);
    const creditData = { proposalSatisfiedDate: date };

    expect(verifyProposalSatisfiedDateWithin24Months(creditData)).toBe(false);
  });

  it('test verifyProposalSatisfiedDateWithin24Months within 24 months', async () => {
    const date = subMonths(new Date(), 1);
    const creditData = { proposalSatisfiedDate: date };

    expect(verifyProposalSatisfiedDateWithin24Months(creditData)).toBe(true);
  });
});
