
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import bugRoutes from './routes/bugs.js';
import siteRoutes from './routes/sites.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/bugs', bugRoutes);
app.use('/sites', siteRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));