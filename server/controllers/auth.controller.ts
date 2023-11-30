import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import database from '../models';
import IUser from "../models/user.interface";
const User = database.user;

async function signUp (req: Request, res: Response) {
  try {
    const user = new User({
      firstname: req.body.username,
      lastname: req.body.lastname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      role: "user"
    });

    await user.save();

    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
}


/*____ WORKING HERE ____*/
function signIn (req: Request, res: Response) {
  try {
    User.findOne({
      username: req.body.username
    })
      .exec().then((user: IUser | null) => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
  
        const token = jwt.sign({ id: user.id },
                                config.secret,
                                {
                                  algorithm: 'HS256',
                                  allowInsecureKeySizes: true,
                                  expiresIn: 86400, // 24 hours
                                });
  
        var authorities = [];
  
        for (let i = 0; i < user.roles.length; i++) {
          authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user._id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
  } catch(err) {
    res.status(500).send({ message: err });
    return;
  }
  
};