const handler = require('../handler');
const https = require('https');
const { env } = require('process');

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
    if(process.env.APP_ENV == "CI") {
        if(Math.random() < .2) {
            expect(false).toBe(true);
        }
    }
    expect(true).toBe();
});