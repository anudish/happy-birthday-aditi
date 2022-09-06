const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/happy-birthday-aditi'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/happy-birthday-aditi/index.html'));
});

// Start the app by listening on the default Heroku port
let port = process.env.PORT || 8080
app.listen(port, ()=> { console.log(`App is running on the port ${port}`)});