const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const todosCountKey = "added_todos"
  const count = (await redis.get(todosCountKey)) ?? "0";
  res.send({ [todosCountKey]: Number(count) })
})


module.exports = router;
