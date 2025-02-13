const express = require('express');
const router = express.Router();

const healthTips = [
  "Drink plenty of water",
  "Exercise regularly",
  "Eat a balanced diet",
  "Get enough sleep",
  "Manage stress effectively"
];

router.get('/tips', (req, res) => {
  res.json(healthTips);
});

module.exports = router;