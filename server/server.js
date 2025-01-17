import express from "express";
import cors from "cors";
import env from "dotenv";


env.config();

const app = express();
const port = process.env.PORT;

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