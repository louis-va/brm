import { Request, Response, NextFunction } from 'express';

import validateSignUp from '../middlewares/validateSignUp';
import auth from '../controllers/auth.controller'

module.exports = function(app: any) {
  app.use(function(req: Request, res: Response, next: NextFunction) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      validateSignUp.checkDuplicateEmail,
      validateSignUp.checkExistRole
    ],
    auth.signUp
  );

  app.post("/api/auth/signin", auth.signIn);
};
