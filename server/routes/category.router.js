const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// router.get('/random', (req, res) => {
//   axios({
//     method:   'GET',
//     url:  `api.giphy.com/v1/gifs/${api_key=process.env.GIPHY_API_KEY}&q=random`
//   })
//   .then((apiRes) => {
//     console.log('Sending data:', apiRes.data);
//     res.send(apiRes.data.images.original.url);
//   })
//   .catch((err) => {
//     console.error('GIPHY req failed!', err);
//     res.sendStatus(500);
//   })
// })

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      console.log('Response from db:', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
  // axios({
  //   method:   'GET',
  //   url:  `api.giphy.com/v1/gifs/${api_key=process.env.GIPHY_API_KEY}&q=shrek`
  // })
  // .then((apiRes) => {
  //   console.log('Sending data:', apiRes.data);
  //   res.send(apiRes.data);
  // })
  // .catch((err) => {
  //   console.error('GIPHY req failed!', err);
  //   res.sendStatus(500);
  // })
});

module.exports = router;
