import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

export const saveLendfulKORules = (leadId, lendfulKnockoutRules, KORulesPassed) => {
  if (!leadId) return false;

  const dynamodb = new DynamoDBClient({});
  const dynamodbConnection = DynamoDBDocumentClient.from(dynamodb);
  return dynamodbConnection.send(
    new GetCommand({
      TableName: 'knockout_rules',
      Key: {
        lead_id: leadId,
        knockoutRules: lendfulKnockoutRules,
        rules_passed: KORulesPassed,
      },
    }),
  );
};

module.exports = {
  saveLendfulKORules,
};
