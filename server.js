const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const routes = require('./routes/web');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));