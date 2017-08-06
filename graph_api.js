const config = require('./config');
var { FB, FacebookApiException } = require('fb');

exports.getFeed = () => new Promise((resolve, reject) => {
    FB.api('me/feed', {
        access_token: config.graph_api_explorer_token,
        limit: config.posts,
        since: config.startDate
    }, (res) => {
        if (!res || res.error) {
            reject(!res ? 'Unknown error occurred!' : res.error);
        } else if (res.data.length == 0) {
            reject('No post recieved!');
        } else {
            resolve(res.data);
        }
    });
});
