const { mockClient } = require('aws-sdk-client-mock');
const AWS = require('aws-sdk');
const { saveLendfulKORules } = require('../../../functions/databaseUtil');

const { DynamoDBDocumentClient } = AWS;
const ddbMock = mockClient(DynamoDBDocumentClient);

describe('test databaseUtil', () => {
  it('test saveLendfulKORules with empty parameters', async () => {
    expect(saveLendfulKORules()).toBe(false);
  });
});
