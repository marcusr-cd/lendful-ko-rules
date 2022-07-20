const { subMonths } = require('date-fns');
const { verifyKnockoutRulesLendfulAPI } = require('../../../common/knockoutRules');

const lead = {
  fields: JSON.stringify({ monthly_income: 4500 }),
};

const date = subMonths(new Date(), 1);

const creditData = {
  bankruptcy: true,
  hasConsumerProposal: true,
  score: 700,
  hasDerogatoryCredit: true,
  bankruptcyDateDischarged: date,
  monthly_income: 4200,
  proposalSatisfiedDate: date,
  monthlyDebitAmount: 0,
  totalUnpaidCollectionsAndLegal: 600,
};

describe('test verifyKnockoutRulesLendfulAPI', () => {
  it('test verifyKnockoutRulesLendfulAPI with empty parameter', async () => {
    expect(verifyKnockoutRulesLendfulAPI(null, null)).toBe(false);
  });

  it('test verifyKnockoutRulesLendfulAPI one empty parameter', async () => {
    expect(verifyKnockoutRulesLendfulAPI(lead, null)).toBe(false);
    expect(verifyKnockoutRulesLendfulAPI(null, creditData)).toBe(false);
  });

  it('test verifyKnockoutRulesLendfulAPI with KO not passed', async () => {
    expect(verifyKnockoutRulesLendfulAPI(lead, creditData)).toBe(false);
  });

  it('test verifyKnockoutRulesLendfulAPI with KO passed', async () => {
    creditData.bankruptcy = false;
    creditData.hasConsumerProposal = false;
    creditData.hasDerogatoryCredit = false;
    creditData.bankruptcyDateDischarged = null;
    creditData.proposalSatisfiedDate = null;
    creditData.totalUnpaidCollectionsAndLegal = 0;
    expect(verifyKnockoutRulesLendfulAPI(lead, creditData)).toBe(true);
  });
});
