const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

let puppies = [{
    name: 'asfasd',
    age: 12
}, {
    name: 'afdf',
    age: 1
}, {
    name: 'sdfdf',
    age: 4
}]
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/puppies', (req, res, next) => {
    res.send(puppies);
})

app.delete('/puppies/:puppyId', (req, res, next) => {
    let actualId = Number(req.params.puppyId) - 1;
    puppies = puppies.filter((puppy, idx) => idx !== actualId);
    res.send('delete successful!');
})
// app.use((req, res, next) => {
//     res.send('<h1> YOU MADE IT!! </h1>')
// })

app.listen(3000);
