import express, { Express } from "express";
import { config } from "dotenv";
import cors from "cors";
import logger from "morgan";
import dbConnection from "./config/dbConnection";

import deviceRoute from "./routes/deviceRoute";

config();
dbConnection(process.env.MONGODB_URI);

const app: Express = express();
const port = process.env.PORT || 5000;
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/device", deviceRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
