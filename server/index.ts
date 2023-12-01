import express, { Express, Request, Response, NextFunction } from 'express';
import { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import database from './models';
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

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

// Set response headers
app.use(function(req: Request, res: Response, next: NextFunction) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

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

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/test', userRoutes);

// Listen to port
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});