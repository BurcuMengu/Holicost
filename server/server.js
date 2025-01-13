import express from "express";
import cors from "cors";
import env from "dotenv";



env.config();



const app = express();
app.use(cors());

const port = process.env.PORT;







app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});