require('dotenv').config();
let request = require('request')
let async = require('async');
let moment = require('moment-timezone');
moment.locale('ja');
let timezone = 'Asia/Tokyo'

let headers = {
    'Content-Type': 'application/json'
}

let url = process.env.WEBHOOK_URL

function genPost(content) {
    let post = {
        url: url,
        method: 'POST',
        headers: headers,
        json: true,
        form: {
            "username": "クラン戦参加確認BOT",
            "content": content
        }
    }
    return post
}

function genPoll(string) {
    let date = moment().tz(timezone).format("MM月DD日")
    let content = '/poll "[AU]' + date + 'のクラン戦、' + string + 'に参加しますか?" "はい" "いいえ"'
    return genPost(content)
}

exports.handler = function (event, context) {
    // TODO implement
    async.waterfall([
        function (callback) {
            request(genPost("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-"), function (error, response, body) {
                //コールバックで色々な処理
                if (error) {
                    console.log('Error: ' + error.message);
                }
                callback(null, 0);
            });
        },
        function (arg1, callback) {
            request(genPoll('21:00 ~ 22:00'), function (error, response, body) {
                //コールバックで色々な処理
                if (error) {
                    console.log('Error: ' + error.message);
                }
                callback(null, 0);
            });
        },
        function (arg1, callback) {
            request(genPoll('22:00 ~ 23:00'), function (error, response, body) {
                //コールバックで色々な処理
                if (error) {
                    console.log('Error: ' + error.message);
                }
                callback(null, 0);
            });
        },
        function (arg1, callback) {
            request(genPoll('23:00 ~ 24:00'), function (error, response, body) {
                //コールバックで色々な処理
                if (error) {
                    console.log('Error: ' + error.message);
                }
                callback(null, 0);
            });
        },
    ]
        , function (err, results) {
            if (err) {
                console.log(err);
            }
        }
    );
};
