import { AWS } from 'aws-sdk';

s3 = new AWS.S3({ apiVersion: '2006-03-01' });

export const saveS3Bucket = (leadId, lendfulKnockoutRules) => {
  const bucketParams = {
    Bucket: `${leadId}-${new Date().toISOString()}`,
    Body: JSON.stringify(lendfulKnockoutRules),
  };

  // call S3 to create the bucket
  s3.createBucket(bucketParams, function (err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data.Location);
    }
  });
};
