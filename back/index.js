import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./db/router/routes/index.js";
import conectarDB from "./db/db.js";
import morgan from "morgan";

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan('dev'));

const PORT = process.env.PORT;
const url = process.env.url
conectarDB();

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

app.use("/api/v1", routes);
