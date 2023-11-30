import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model';
import IUser from "../models/user.interface";

const USER_ROLES = ["user", "admin"]

function checkDuplicateEmail(req: Request, res: Response, next: NextFunction) {
  User.findOne({
      email: req.body.email
  }).exec().then((user: IUser | null) => {
      if (user) {
          res.status(400).send({ message: "Failed! Email is already in use!" });
          return;
      }
      next();
  }).catch((err: Error) => {
      res.status(500).send({ message: err.message || "Some error occurred while checking email duplication." });
  });
}

function checkExistRole (req: Request, res: Response, next: NextFunction) {
  if (req.body.roles) {
    if (!USER_ROLES.includes(req.body.role)) {
      res.status(400).send({
        message: `Failed! Role ${req.body.role} does not exist!`
      });
      return;
    }
  }

  next();
}

const validateSignUp = {
  checkDuplicateEmail,
  checkExistRole
};

export default validateSignUp;