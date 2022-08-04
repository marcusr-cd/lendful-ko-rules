const { verifyUnpaidCollectionLegalGreaterThan500 } = require('../../../../functions/knockoutRules');

describe('test verifyUnpaidCollectionLegalGreaterThan500', () => {
  it('test verifyUnpaidCollectionLegalGreaterThan500 with empty parameter', async () => {
    expect(verifyUnpaidCollectionLegalGreaterThan500(null)).toBe(false);
  });

  it('test verifyUnpaidCollectionLegalGreaterThan500 without derogatory credit', async () => {
    const creditData = { totalUnpaidCollectionsAndLegal: 0 };
    expect(verifyUnpaidCollectionLegalGreaterThan500(creditData)).toBe(false);
  });

  it('test verifyUnpaidCollectionLegalGreaterThan500 with 600 unpaid collections', async () => {
    const creditData = { totalUnpaidCollectionsAndLegal: 600 };
    expect(verifyUnpaidCollectionLegalGreaterThan500(creditData)).toBe(true);
  });
});
