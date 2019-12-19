const express = require('express');
const app = express();

let users = []

app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    return next();
})

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/users', function(req, res) {

    res.send(users)
})

app.get('/user/:id', function(req, res) {
    if (users.length) {
        res.json(users[req.params.id])
    } else {
        res.send(users)
    }
})

app.post('/user', function(req, res) {
    users.push({ "id": users.length });
    res.json(users[users.length - 1]);
})

app.delete('/user:id', function(req, res) {
    if (users.length > 0) {
        let user = users.splice(req.params.id, 1)

        res.status(202).json({
            ok: true
        })
    } else {
        res.sendStatus(204).json({
            ok: true
        });
    }
})

app.listen(3000, function() {
    console.log("server is running")
})