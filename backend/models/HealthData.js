const mongoose = require('mongoose');

const HealthDataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    symptoms: [String],
    heartRate: Number,
    sleepHours: Number,
    caloriesBurned: Number,
}, { timestamps: true });

module.exports = mongoose.model('HealthData', HealthDataSchema);
