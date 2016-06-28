var express = require('express')
  , app = express()
  , exphbs  = require('express-handlebars')
  , port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(require('./controllers'));
app.use('/static', express.static('public'));

app.use('/tags', express.static('tags'));

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
