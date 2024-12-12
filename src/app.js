require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const periodRoutes = require('./routes/PeriodRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/periods', periodRoutes);
app.use('/api/user-info', userRoutes);

app.get('/', (req, res) => {
    res.send('Pregnancy and Period Tracker API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});