const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(_dirname, '..', 'client', 'build')))
}

app.use(routes);

mongoose.connect(process.env.MONGOB_URI || 'mongodb://localhost/bookSearch');

app.listen(PORT, () => {
    console.log('==> 🌎  API Server now listening on PORT ${ PORT } !');
});