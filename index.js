const fs = require('fs');
const config = require('./config');
const graph = require('./graph_api');


console.log('Please make sure "graph_api_explorer_token" has been updated!');

// Check is there any data in `post_list.json`
const check_post_list = async () => {
    // TODO Read JSON file `post_list.json`
    if(fs.exists('./post_list.json')) {
        var posts = require('./post_list.json');
    } else {
        posts = [];
    }

    if (posts.length == 0) {    //  Empty => Get feed
        console.log('post_list.json is empty\n' +
            'Request data from Facebook...');

        try {   // Get feed
            posts = await graph.get_feed();

            // Store posts to post_list.json
            data_stringify = JSON.stringify(posts);
            // Save posts to post_list.json
            fs.writeFile('post_list.json', data_stringify, err => {
                if (err) {
                    console.log(err);
                }
            });

        } catch (err) {
            console.log(err);
        }
    } else {
        //  YES => Next Step
    }
}

check_post_list()

// TODO Ask the user whether to update `post_list.json` or not
//  YES => Update
//  NO => Get Feeds

// Get all information of posts in `post_list.json`

// Analysis