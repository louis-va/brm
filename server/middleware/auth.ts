import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import database from '../models'
import IUser from "../models/user.interface";
const User = database.user;

// ENV variables
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// Types
interface AuthenticatedRequest extends Request {
  userId?: string;
}

// verify token
function verifyToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const token = req.headers["x-access-token"];

  if (!token || !(typeof token === 'string')) {
    return res.status(401).send({
      message: "Unauthorized!",
    });
  }

  jwt.verify(token, JWT_SECRET!, (err: jwt.VerifyErrors | null, decoded: any) => {
    if (err || !decoded || !decoded.id) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
}

// is admin
function isAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  User.findById(
    req.userId
  ).exec().then((user: IUser | null) => {

    if (!user || !user.role) {
      res.status(500).send({ message: "User role is missing" });
      return;
    }

    if (user.role === "admin") {
      next();
      return;
    } else {
      res.status(403).send({ message: "Require Admin Role!" });
      return;
    }
  }).catch((err: Error) => {
      res.status(500).send({ message: err.message || "Some error occurred while checking admin role." });
  });
}

const auth = {
  verifyToken,
  isAdmin
};

export default auth;