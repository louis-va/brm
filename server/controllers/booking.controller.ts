import { Response } from 'express';

import { AuthenticatedRequest } from '../interfaces/AuthenticatedRequest';
import database from '../models';
const Booking = database.booking;

// Create a new booking
async function addBooking(req: AuthenticatedRequest, res: Response) {
  try {
    const booking = new Booking({
      screening_id: req.body.screening_id,
      user_id: req.userId,
      seats: req.body.seats,
      qr_code: String,
      tickets: req.body.tickets,
      snacks: req.body.snacks,
      price: req.body.price
    });

    await booking.save();

    res.status(200).send({ message: "Booking was created successfully!" });
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

export default { addBooking }