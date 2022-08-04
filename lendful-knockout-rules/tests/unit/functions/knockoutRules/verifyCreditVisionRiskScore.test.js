const { verifyCreditVisionRiskScore } = require('../../../../functions/knockoutRules');

describe('test verifyCreditVisionRiskScore', () => {
  it('test verifyCreditVisionRiskScore with empty parameter', async () => {
    expect(verifyCreditVisionRiskScore(null, null)).toBe(true);
  });

  it('test verifyCreditVisionRiskScore with Alberta and low score', async () => {
    const lead = {
      province: 'Alberta',
    };

    const creditData = { score: 400 };

    expect(verifyCreditVisionRiskScore(lead, creditData)).toBe(true);
  });

  it('test verifyCreditVisionRiskScore with Alberta and High score', async () => {
    const lead = {
      province: 'Alberta',
    };

    const creditData = { score: 700 };

    expect(verifyCreditVisionRiskScore(lead, creditData)).toBe(false);
  });

  it('test verifyCreditVisionRiskScore with Low score', async () => {
    const lead = {};

    const creditData = { score: 500 };

    expect(verifyCreditVisionRiskScore(lead, creditData)).toBe(true);
  });

  it('test verifyCreditVisionRiskScore with High score', async () => {
    const lead = {};

    const creditData = { score: 700 };

    expect(verifyCreditVisionRiskScore(lead, creditData)).toBe(false);
  });
});
