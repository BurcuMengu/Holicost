import express from "express";
import cors from "cors";
import pkg from 'pg';
import env from "dotenv";
import { WebSocketServer } from "ws";
import http from "http";

env.config();

const { Pool } = pkg;
const app = express();
const port = process.env.PORT;

// PostgreSQL Pool connection
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







// WebSocket Setup
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('WebSocket connection established');

    ws.on('message', (message) => {
        console.log('Received:', message);

        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocketServer.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});