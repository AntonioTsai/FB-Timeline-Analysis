const client = require('./client');
var { FB, FacebookApiException } = require('fb');

FB.api('me/feed', {
    access_token: client.graph_api_explorer_token,
    limit: 100,
}, (res) => {
    if (!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    console.log(res);
    // console.log(res.data.length);
});
