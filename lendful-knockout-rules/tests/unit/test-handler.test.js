'use strict';

const app = require('../../app.js');
var event, context;

describe('Tests index', function () {
  it('verifies successful response', async () => {
    const result = await app.lambdaHandler(event, context)

    expect(typeof result).toBe('object');
    expect(result.statusCode).toBe(200);
    expect(typeof result.body).toBe('string');

    const response = JSON.parse(result.body);

    expect(typeof response).toBe('object');
    expect(response.message).toBe("hello world");
    // expect(response.location).to.be("string");
  });
});
