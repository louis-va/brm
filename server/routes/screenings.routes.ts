import express from 'express';

import controller from '../controllers/screenings.controller'

const router = express.Router();

router.post("/add",
  controller.addScreening
);

export default router;