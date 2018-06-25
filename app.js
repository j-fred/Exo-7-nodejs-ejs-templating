const express = require('express');
const app = express();
const port = process.env.PORT || 3009;
const request = require('request');



//app.use(express.json());
app.use(express.static('public'));

// utilisation du moteur de rendu ejs
app.set('view engine', 'ejs');

const routeJson = __dirname + '/data/' + 'competences.json';
const urlService = 'http://localhost:'+port+'/'+'competences';

app.get('/', function (req, res) {
    request(urlService, function (err, response, body) {
        if (err) {
            console.log(err);
        } else {
            const myCpt = JSON.parse(body);
            console.log(myCpt);
            res.render('index', {
                competences: myCpt
            });
        }
    })
  
});

app.get('/competences', (req, res) => {
    //    res.json(urlJson);
   res.sendFile(routeJson);
});

// start the server
app.listen(port,  function () {
    console.log('Démarrage du serveur sur =>  http://localhost:' + port);
});