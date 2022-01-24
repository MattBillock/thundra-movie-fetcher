const handler = require('../handler');
const https = require('https');

test('correct response code is returned', () => {
    var old = https.request;
    https.request = jest.fn(() => {
        Promise.resolve();
    });
    handler.fetchMovie().then( (response) => {
        expect(response.statusCode).toBe(200);
        https.request = old;
    });

});

test('forced failure in CI for Thundra demonstration', () => {
    expect(true).toBe();
});