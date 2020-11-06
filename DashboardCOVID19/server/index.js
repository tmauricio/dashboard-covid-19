var express = require('express');
var request = require("request");
const cors = require('cors');

var app = express();

// app.use('/static', express.static(__dirname + '../build'));
app.use(cors());

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })


app.get('/api/getAllCountries', function (req, res) {
    request.get("https://restcountries.eu/rest/v2/all", (error, response, body) => {
        if(error) {
            console.log(error);
        } else {
            console.log(response.body);
            res.send(JSON.parse(response.body));
        }
    });  
});

app.get('/api/getMyCountry', function (req, res) {
    request.get("https://freegeoip.app/json", (error, response, body) => {
        if(error) {
            console.log(error);
        } else {
            console.log(response.body);
            res.send(JSON.parse(response.body));
        }
    });  
})


app.get('/api/getInfoCovidByCountry/:country', (req, res) => {
    request.get(`https://covid19-api.weedmark.systems/api/v1/stats?country=${req.params.country}`, (error, response, body) => {
        if(error) {
            console.log(error);
        } else {
            console.log(response.body);
            res.send(JSON.parse(response.body));
        }
    });  
});


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("app listening at http://%s:%s", host, port);
})

