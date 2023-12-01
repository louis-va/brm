import { Request, Response, NextFunction } from 'express';

import auth from '../middlewares/auth'
import controller from '../controllers/user.contoller'

module.exports = function(app: any) {
  app.use(function(req: Request, res: Response, next: NextFunction) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [auth.verifyToken], controller.userBoard);

  app.get(
    "/api/test/admin",
    [auth.verifyToken, auth.isAdmin],
    controller.adminBoard
  );
};
