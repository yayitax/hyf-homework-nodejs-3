const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: []
    })
})


app.listen(3000, function() {
    console.log("server is running")
})