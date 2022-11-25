const express = require('express');
const app = express();

const hbs = require('express-handlebars');

app.use(express.static('public'));

app.engine('hbs', hbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

const User = require('./app/models/User');

const user = require('./app/controllers/user.controller');

app.get('/', function(req, res){
    res.render('home', {
        title: 'Tytuł z Expresa',
        content: 'Cześć'
    });
});

app.get('/mongoose', function(req, res){
    
});

app.get('/users', function(req, res){
    user.list(function(err, users){
        if(err) res.send(err);
        // console.log(users);
        res.render('users', {users});
    })
});

// app.get('/user/:id', function(req, res){
//     res.send('user' + req.params.id)
// })


app.listen(9090, function(){
    console.log('Serwer Node.js działa');
});