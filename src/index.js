const express = require('express');
const app = express();

let users = []
let count = 0
let jsonStr = ""

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/users', function(req, res) {
    res.send(users)
})

app.get('/user/:id', function(req, res) {
    if (count) {
        res.json(users[req.params.id])
    } else {
        res.send(users)
    }
})

app.post('/user', function(req, res) {
    const id = count;
    users.push({ "id": id });
    res.json(users[count])
    count++;
})

app.listen(3000, function() {
    console.log("server is running")
})