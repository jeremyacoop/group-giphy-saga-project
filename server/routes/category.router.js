const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/random', (req, res) => {
  axios({
    method:   'GET',
    url:  `api.giphy.com/v1/gifs/random?${api_key=process.env.GIPHY_API_KEY}&q=random`
  })
  .then((apiRes) => {
    console.log('Sending data:', apiRes.data);
    res.send(apiRes.data.images.downsized.url);
  })
  .catch((err) => {
    console.error('GIPHY req failed!', err);
    res.sendStatus(500);
  })
})

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
