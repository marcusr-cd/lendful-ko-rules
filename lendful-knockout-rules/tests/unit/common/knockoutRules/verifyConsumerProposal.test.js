const { verifyConsumerProposal } = require('../../../../common/knockoutRules');

describe('verifyConsumerProposal', () => {
  it('test verifyConsumerProposal with empty parameter', async () => {
    expect(verifyConsumerProposal(null)).toBe(false);
  });

  it('test verifyConsumerProposal without consumer proposal', async () => {
    const creditData = { hasConsumerProposal: false };
    expect(verifyConsumerProposal(creditData)).toBe(false);
  });

  it('test verifyConsumerProposal with consumer proposal', async () => {
    const creditData = { hasConsumerProposal: true };
    expect(verifyConsumerProposal(creditData)).toBe(true);
  });
});
