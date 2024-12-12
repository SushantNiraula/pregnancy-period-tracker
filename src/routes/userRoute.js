const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const userInfo = await User.findById(req.user.id);
        res.json(userInfo);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/', async (req, res) => {
    const { name, age, weight, height, additionalInfo } = req.body;
    try {
        const updatedInfo = await User.findByIdAndUpdate(
            req.user.id,
            { name, age, weight, height, additionalInfo },
            { new: true, upsert: true }
        );
        res.json(updatedInfo);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;