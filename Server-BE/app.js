import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import appRouter from "./router.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', appRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.info(`Servidor corriendo en http://localhost:${PORT}`)
})
