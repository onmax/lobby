const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors')
const app = express();
app.use(cors())

// API file for interacting with MongoDB
const api = require('./lobby-api/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Angular DIST output folder
//app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});*/

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})

server.listen(port, () => console.log(`Running on localhost:${port}`));