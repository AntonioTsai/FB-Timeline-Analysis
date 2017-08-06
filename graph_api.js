const fs = require('fs');
const config = require('./config');
var { FB, FacebookApiException } = require('fb');
var startDate = '2017-01-01';

FB.api('me/feed', {
    access_token: config.graph_api_explorer_token,
    limit: 100,
    since: startDate
}, (res) => {
    if (!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    if(res.data.length != 0) {
        // Json to string
        data_stringify = JSON.stringify(res.data);
        // Save posts to post_list.json
        fs.writeFile('post_list.json', data_stringify, err => {
            if(err) {
                console.log(err);
            }
        });
    }
});
