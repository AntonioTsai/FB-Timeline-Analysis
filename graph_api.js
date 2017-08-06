const config = require('./config');
var { FB, FacebookApiException } = require('fb');

exports.getFeed = () => new Promise(resolve => {
    // TODO move limit, since(startDate) to parameter
    FB.api('me/feed', {
        access_token: config.graph_api_explorer_token,
        limit: 100,
        since: startDate
    }, (res) => {
        if (!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }

        // TODO move this part to index.js
        if (res.data.length != 0) {
            // Json to string
            data_stringify = JSON.stringify(res.data);
            // Save posts to post_list.json
            fs.writeFile('post_list.json', data_stringify, err => {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
});
