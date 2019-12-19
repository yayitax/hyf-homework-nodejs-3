const express = require('express');
const _ = require('underscore');

const app  = new express();

let users = [];


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
        
    res.json(users)

})

app.post('/user', (req, res) => {
    users.push({id:0})
    res.json(users);
})

app.get('/user/:id', (req, res) => {
    const user = users.find(user => user.id == req.params.id);
    res.json(user);
});

app.delete('/user/:id', (req, res) => {

   
    if(users.length > 0){
        users = [];
        res.status(202).json({
            ok: true
        })
    } else {
        res.status(204).json({
            ok: true
        });
    }

})

app.listen(3000, () => {
    console.log('Listen on port 3000');
})