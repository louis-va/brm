import express from 'express';

import controller from '../controllers/bookings.controller'
import auth from '../middlewares/verifyAuth'

const router = express.Router();

router.post("/add",
  [
    auth.verifyToken
  ],
  controller.addBooking
);

export default router;