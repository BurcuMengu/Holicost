import express from "express";
import cors from "cors";
import pkg from "pg";
import env from "dotenv";

env.config();

const { Pool } = pkg;
const app = express();
const port = process.env.PORT;

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
pool.connect();

const corsOptions = {
    origin: process.env.REACT_APP_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};
app.use(cors(corsOptions));





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});