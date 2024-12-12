const express = require('express');
const router = express.Router();
const Period = require('../models/Period');

router.get('/', async (req, res) => {
    try {
        const periods = await Period.find({ userId: req.user.id });
        res.json(periods);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/', async (req, res) => {
    const { startDate, endDate, symptoms, notes } = req.body;
    try {
        const newPeriod = new Period({ userId: req.user.id, startDate, endDate, symptoms, notes });
        await newPeriod.save();
        res.json(newPeriod);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;