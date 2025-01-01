import express from 'express';
import Connection from './database/db.js';
import dotenv from "dotenv";
import Router from './routes/route.js';

const app = express();
app.use('/', Router);


dotenv.config();

const PORT = 8000;

app.listen(PORT, () => console.log(`server is running  on port ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);