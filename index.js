const client = require('./client');
var {FB, FacebookApiException} = require('fb');
var access_token = '';

// Get Access Token
FB.api('oauth/access_token', {
    client_id: client.id,
    client_secret: client.secret,
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    access_token = res.access_token;
    // console.log(`${accessToken }`);
});
