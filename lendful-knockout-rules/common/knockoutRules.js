const { differenceInMonths, differenceInYears } = require('date-fns');

/**
 * Return the monthly income multiplied by 12
 * in order to get the yearly
 * @param {Object} fields
 * @returns {Number}
 */
function _getYearlyIncome(fields) {
  if (!fields?.monthly_income) return 0;
  return Number(fields.monthly_income) * 12;
}

/**
 * Verify if the client has consumer proposal open
 * @param {Object} creditData
 * @param {Boolean}
 */
function verifyConsumerProposal(creditData) {
  if (!creditData?.hasConsumerProposal) return false;
  return creditData.hasConsumerProposal;
}

/**
 * Verifify if the yearly income is less than 50,000
 * @param {Object} fields
 * @returns {Boolean}
 */
function verifyIncomeLowerThan50000Yearly(fields) {
  return _getYearlyIncome(fields) < 50000;
}

/**
 * Verify if if total of debit service is 65% greater than income
 * @param {Object} fields
 * @param {Object} creditData
 * @returns {Boolean}
 */
function verifyTotalDebitServices65GreaterThanIncome(fields, creditData) {
  if (!fields?.monthly_income) return true;
  if (!creditData?.monthlyDebitAmount) return false;

  const totalDebitServiceRatio = Number(creditData.monthlyDebitAmount) / Number(fields.monthly_income);

  return totalDebitServiceRatio > 0.65;
}

/**
 * Verify if the client has bankruptcy
 * @param {Object} creditData
 * @returns {Boolean}
 */
function verifyBankruptcy(creditData) {
  if (!creditData?.bankruptcy) return false;
  return creditData.bankruptcy;
}

/**
 * Verify if the discharge date from bankruptcy is within 24 months
 * @param {Object} creditData
 * @returns {Boolean}
 */
function verifyDischargedDateWithin24Months(creditData) {
  if (!creditData?.bankruptcyDateDischarged) return false;

  const bankruptcyDateDischarged = new Date(creditData.bankruptcyDateDischarged);
  const now = new Date();
  const difference = Math.abs(differenceInMonths(bankruptcyDateDischarged, now));

  return difference < 24;
}

/**
 * Verify if the consumer proposal has been satisfied and the date is within 24 months
 * @param {Object} creditData
 * @returns {Boolean}
 */
function verifyProposalSatisfiedDateWithin24Months(creditData) {
  if (!creditData?.proposalSatisfiedDate) return false;

  const proposalSatisfiedDate = new Date(creditData.proposalSatisfiedDate);
  const now = new Date();
  const difference = Math.abs(differenceInMonths(proposalSatisfiedDate, now));

  return difference < 24;
}

/**
 * Verify if the applicant has derogatory credit for the past 3 years
 * @param {Object} creditData
 * @returns {Boolean}
 */
function verifyDerogatoryCredit(creditData) {
  if (!creditData?.hasDerogatoryCredit) return false;

  return creditData.hasDerogatoryCredit;
}

/**
 * Verify if there are unpaid collections or judgements of any kind
 * are greater than $500
 * @param {Object} creditData
 * @returns {Boolean}
 */
function verifyUnpaidCollectionLegalGreaterThan500(creditData) {
  if (!creditData?.totalUnpaidCollectionsAndLegal) return false;

  return creditData.totalUnpaidCollectionsAndLegal > 500;
}

/**
 * Verify credit vision risk score
 *  * For Alberta and Quebec check if the score is less than 600
 *  * For other provinces check if the score is less than 550
 * @param {Object} lead
 * @param {Object} creditData
 * @returns {Boolean}
 */
function verifyCreditVisionRiskScore(lead, creditData) {
  if (!creditData?.score) return true;

  if (['Alberta', 'Quebec'].includes(lead.province)) {
    return creditData.score < 600;
  }
  return creditData.score < 550;
}

/**
 * Verify if the applicant does have a mortgage
 * @param {Object} creditData
 * @return {Boolean}
 */
function verifyNoMortgage(creditData) {
  if (!creditData?.CreditSummary?.NumberOfMortgageTrades) return true;

  return !Number(creditData.CreditSummary.NumberOfMortgageTrades);
}

/**
 * Get the First trade opened date from human readable xml
 * @param {String} xmlHumanReadable
 * @return {String}
 */
function getTradeFirstOpened(xmlHumanReadable) {
  const regex = /Trade First Opened *([\w]*)/g;
  const match = regex.exec(xmlHumanReadable);

  return match ? match[1] : '';
}

/**
 * Verify if the Trade First Opened is within 3 years from today
 * @param {String} tradeFirstOpened
 * @return {Boolean}
 */
function verifyTradeFirstOpenedWithin3YearsFromToday(tradeFirstOpened) {
  if (!tradeFirstOpened) return false;
  const now = new Date();
  const dateTradeFirstOpened = new Date(Date.parse(tradeFirstOpened));

  const differente = Math.abs(differenceInYears(now, dateTradeFirstOpened));
  return differente <= 3;
}

/**
 * Verify the knockout rules for Lendful API
 * @param {Object} lead
 * @param {Object} creditData
 * @param {String} xmlHumanReadable
 * @returns
 */
function verifyKnockoutRulesLendfulAPI(lead, creditData, xmlHumanReadable) {
  if (!lead) return false;

  const fields = JSON.parse(lead.fields);
  const lendfulKnockoutRules = {
    income_less_than_50000: verifyIncomeLowerThan50000Yearly(fields),
    'total_debit_service_greater_65%': verifyTotalDebitServices65GreaterThanIncome(fields, creditData),
    bankruptcy_discharge_date_within_24_months_or_bankruptcy:
      verifyBankruptcy(creditData) || verifyDischargedDateWithin24Months(creditData),
    consumer_proposal_satisfied_date_within_24_months_or_not_satisfied:
      verifyConsumerProposal(creditData) || verifyProposalSatisfiedDateWithin24Months(creditData),
    has_derogatory_credit_or_past_judgment_3_years: verifyDerogatoryCredit(creditData),
    total_unpaid_collections_and_judgments_greater_than_$500: verifyUnpaidCollectionLegalGreaterThan500(creditData),
    credit_vision_risk_score: verifyCreditVisionRiskScore(lead, creditData),
    no_mortgage_and_first_trade_opened_3_years_of_pull:
      verifyTradeFirstOpenedWithin3YearsFromToday(getTradeFirstOpened(xmlHumanReadable)) &&
      verifyNoMortgage(creditData),
  };

  const KORulesDeclined = Object.values(lendfulKnockoutRules).some((rule) => rule);

  // return updateLeadLendfulKnockoutRules(lead, lendfulKnockoutRules, !$KORulesDeclined);
  return !KORulesDeclined;
}

module.exports = {
  verifyConsumerProposal,
  verifyIncomeLowerThan50000Yearly,
  verifyTotalDebitServices65GreaterThanIncome,
  verifyBankruptcy,
  verifyDischargedDateWithin24Months,
  verifyProposalSatisfiedDateWithin24Months,
  verifyDerogatoryCredit,
  verifyUnpaidCollectionLegalGreaterThan500,
  verifyCreditVisionRiskScore,
  verifyNoMortgage,
  verifyKnockoutRulesLendfulAPI,
  getTradeFirstOpened,
  verifyTradeFirstOpenedWithin3YearsFromToday,
};
