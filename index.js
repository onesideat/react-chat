require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const Pusher = require('pusher')

const app = express()

// body parser
app.use(bodyParser.json())

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.ALLOW_ORIGIN);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

// Pusher
const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER
})

// Server
app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is up on ' + process.env.SERVER_PORT);

    // default
    app.get('/', (req, res) => {
        res.send('');
    });

    // join
    app.post('/join', (req, res) => {
        if (req.body.username)
            res.json('Joined');
        else
            res.json('Not joined');
    });

    // message
    app.post('/message', (req, res) => {
        pusher.trigger(process.env.PUSHER_CHANNEL, 'message', {
            username: req.body.username,
            gender: req.body.gender,
            message:  req.body.message,
            timestamp: req.body.timestamp
        });
        res.send('Message sent');
    });
});