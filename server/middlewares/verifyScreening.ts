import { Request, Response, NextFunction } from 'express';

import database from '../models'
const Screening = database.screening;

// Check if date + time already exist for a screening
async function checkDate(req: Request, res: Response, next: NextFunction) {
  try {
    const screening = await Screening.findOne({ date: req.body.date }).exec()

    if (screening) {
      res.status(400).send({ message: "This date has already been used for another screening." });
      return;
    }

    next();
    return;
  } catch(err: any) {
    res.status(500).send({ message: err.message || "Some error occurred while validating the screening's date." });
  }
}

export default { checkDate };