require('dotenv').config();
const cors = require('cors')
const express = require('express');
const app = express();
const port = 8000


app.use(cors(), express.json({ limit: "50mb" }), express.urlencoded({ limit: "50mb", extended: true }));


const paymentRoutes = require('./routes/payment.routes');
app.use('/api/payment', paymentRoutes);


app.listen(port, () => console.log(`Listening on port: ${port}`));