const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

// POST /api/sessions
router.post('/', async (req, res) => {
  try {
    const { type, duration } = req.body;
    const session = new Session({ type, duration });
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
