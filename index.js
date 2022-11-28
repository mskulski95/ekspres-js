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


app.get('/users', function(req, res){
    user.list(function(err, users){
        if(err) res.send(err);
        res.render('users', {users});
    })
});



app.listen(9090, function(){
    console.log('Serwer Node.js działa');
});