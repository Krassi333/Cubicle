const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const router=require('./routs');

app.use('/static', express.static('public'));
//app.use(express.urlencoded({extended: false}));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views','./src/views');

app.use(router);

app.listen(5000, () => console.log('The server is listening on port 5000...'))