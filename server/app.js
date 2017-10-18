require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/search', (req, res) => {
  let headers = req.headers;
  fetch('http://api.guitarparty.com/v2/songs/', {
    'Guitarparty-Api-Key': `${process.env.GUITAR_PARTY_API}`
  })
  .then(res => {
    res.json()
    .then(data => {
      console.log(data);
    });
  })
  .catch(err => {
    console.log(err, 'Error in request');
  });
});

module.exports = app;
