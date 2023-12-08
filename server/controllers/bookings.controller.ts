import { Response } from 'express';

import { AuthenticatedRequest } from '../interfaces/AuthenticatedRequest';
import database from '../models';
const Booking = database.booking;

// Create a new screening
async function addBooking(req: AuthenticatedRequest, res: Response) {
  try {
    const booking = new Booking({
      screening_id: {
        type: req.body.screening_id,
        ref: 'Screening'
      },
      user_id: {
        type: req.userId,
        ref: 'User'
      },
      seats: req.body.seats,
      qr_code: String,
      tickets: [TicketSchema],
      snacks: [SnackSchema]
    });

    await booking.save();

    res.status(200).send({ message: "Booking was created successfully!" });
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}