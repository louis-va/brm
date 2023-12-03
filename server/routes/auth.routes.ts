import express from 'express';

import validateSignUp from '../middlewares/validateSignUp';
import controller from '../controllers/auth.controller'

const router = express.Router();

router.post("/signup",
  [
    validateSignUp.checkDuplicateEmail,
    validateSignUp.checkExistRole
  ],
  controller.signUp
);

router.post("/signin",
  controller.signIn
);

router.post("/signout",
  controller.signOut
);

export default router;