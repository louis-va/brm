import express from 'express';

import auth from '../middlewares/auth'
import controller from '../controllers/user.contoller'

const router = express.Router();

router.get("/all", 
  controller.allAccess
);

router.get("/user",
  [auth.verifyToken], 
  controller.userBoard
);

router.get("/admin",
  [auth.verifyToken, auth.isAdmin],
  controller.adminBoard
);

export default router;