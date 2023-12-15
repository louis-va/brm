import { Resend } from "resend";
import dotenv from 'dotenv';

import { IBooking } from '../models/booking.model';
import database from '../models';
const Screening = database.screening;
const User = database.user;

// ENV variables
dotenv.config();
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Send confirmation email
async function sendConfirmationEmail(booking: IBooking) {
  try {
    const resend = new Resend(RESEND_API_KEY);

    const [user, screening] = await Promise.all([
      await User.findById(booking.user_id), 
      await Screening.findById(booking.screening_id)
    ]);

    if(!user || !screening) return false;

    await resend.emails.send({
      from: "Brussels Rooftop Movies <no-reply@send.brm.lou-va.com>",
      to: [user.email],
      subject: `Votre ticket pour ${screening.movie.title}`,
      html: "<strong>it works!</strong>",
    });

    return true;
  } catch (error) {
    return false;
  }
}

export { sendConfirmationEmail }