const mongoose = require('mongoose');

const PeriodSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    symptoms: { type: [String], default: [] },
    notes: { type: String, default: '' }
});

module.exports = mongoose.model('Period', PeriodSchema);