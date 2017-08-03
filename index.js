var client = require('./client');
var {FB, FacebookApiException} = require('fb');


FB.api('oauth/access_token', {
    client_id: client.id,
    client_secret: client.secret,
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    var accessToken = res.access_token;
    console.log(`${accessToken }`);
});