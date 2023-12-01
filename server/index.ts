import express, { Express, Request, Response } from 'express';
import { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import database from './models';

// ENV variables
dotenv.config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// Initialise express
const app: Express = express();

// Allow requests from multiple origins
const allowedOrigins = {
  origin: ["http://localhost:3000"]
};
app.use(cors(allowedOrigins));

// Parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connection to the database
database.mongoose
  .connect(DATABASE_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => {
      console.log("Successfully connect to MongoDB.");
  })
  .catch((err: Error) => {
      console.error("Connection error", err);
      process.exit(1);
  });

// GET /api/test
app.get('/api/test', (req: Request, res: Response) => {
  return res.status(200).json({
    status: "success",
    data: "Connected to the server.",
    message: "Data retrieved successfully"
  });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});