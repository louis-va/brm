import { Request, Response } from 'express';

function allAccess(req: Request, res: Response) {
  res.status(200).send("Public Content.");
}

function userBoard(req: Request, res: Response) {
  res.status(200).send("User Content.");
}

function adminBoard(req: Request, res: Response) {
  res.status(200).send("Admin Content.");
}

export default { allAccess, userBoard, adminBoard }