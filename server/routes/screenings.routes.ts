import express from 'express';

import controller from '../controllers/screenings.controller'
import verifyScreening from '../middlewares/verifyScreening'

const router = express.Router();

router.post("/add",
  [verifyScreening.checkDate],
  controller.addScreening
);

export default router;