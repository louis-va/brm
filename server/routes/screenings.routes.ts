import express from 'express';

import controller from '../controllers/screenings.controller'
import verifyScreening from '../middlewares/verifyScreening'
import auth from '../middlewares/verifyAuth'

const router = express.Router();

router.post("/add",
  [
    auth.verifyToken, 
    auth.isAdmin, 
    verifyScreening.checkDate 
  ],
  controller.addScreening
);

router.get("/",
  controller.getAllScreenings
);

router.get("/genres",
  controller.getGenres
);

router.get("/:id",
  controller.getOneScreening
);

export default router;