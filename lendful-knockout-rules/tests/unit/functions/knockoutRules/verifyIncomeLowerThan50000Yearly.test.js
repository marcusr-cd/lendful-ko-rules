const { verifyIncomeLowerThan50000Yearly } = require('../../../../functions/knockoutRules');

describe('test verifyIncomeLowerThan50000Yearly', () => {
  it('test verifyIncomeLowerThan50000Yearly with empty parameter', async () => {
    expect(verifyIncomeLowerThan50000Yearly(null));
  });

  it('test verifyIncomeLowerThan50000Yearly with value lower than 50000 yearly', async () => {
    const fields = { monthly_income: 4120 };

    expect(verifyIncomeLowerThan50000Yearly(fields)).toBe(true);
  });

  it('test verifyIncomeLowerThan50000Yearly with value greater than 50000 yearly', async () => {
    const fields = { monthly_income: 4200 };

    expect(verifyIncomeLowerThan50000Yearly(fields)).toBe(false);
  });
});
