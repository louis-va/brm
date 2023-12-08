import express from 'express';

import controller from '../controllers/booking.controller'
import auth from '../middlewares/verifyAuth'
import verifyScreening from '../middlewares/verifyScreening';

const router = express.Router();

router.post("/add",
  [
    auth.verifyToken,
    verifyScreening.checkScreeningId
  ],
  controller.addBooking
);

export default router;