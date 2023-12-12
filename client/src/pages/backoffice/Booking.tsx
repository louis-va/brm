import { LayoutBO } from "../../ui/backoffice/design-system/LayoutBO.tsx";
import { Typography } from "../../ui/design-system/Typography.tsx";

const bookings = [
  {
    id: 1,
    seats: ["C2", "C3", "C4"],
    tickets: {
      adult: 2,
      child: 1,
    },
    snacks: ["Popcorn Sucré (3)"],
    price: 30,
  },
  {
    id: 2,
    seats: ["H9"],
    tickets: 1,
    snacks: ["Popcorn Salé"],
    price: 9,
  },
  {
    id: 3,
    seats: ["C2", "C3", "C4"],
    tickets: 3,
    snacks: ["Popcorn Sucré (3)"],
    price: 30,
  },
  {
    id: 4,
    seats: ["F8", "F9"],
    tickets: 2,
    snacks: ["Popcorn Sucré (2)", "Coca-Cola (2)"],
    price: 30,
  },
];

export default function Booking() {
  return (
    <LayoutBO>
      <table className="text-whitePrimary w-full text-left border-collapse ">
        <thead className="border-b-2 bg-zinc-800">
          <tr>
            <th className="p-3 rounded-tl-25">ID</th>
            <th className="p-3">Seats</th>
            <th className="p-3">Tickets</th>
            <th className="p-3">Snacks</th>
            <th className="p-3">Price</th>
            <th className="p-3 rounded-tr-25">Update</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr className="border-b-2">
              <td className="p-3 ">{booking.id}</td>
              <td className="p-3">{booking.seats.join(", ")}</td>
              <td className="p-3">
                {typeof booking.tickets === "number"
                  ? booking.tickets
                  : booking.tickets.adult + booking.tickets.child}{" "}
                ticket(s)
              </td>
              <td className="p-3">{booking.snacks.join(", ")}</td>
              <td className="p-3">{booking.price}€</td>
              <td className="p-3 flex items-center gap-1">
                <Typography
                  fontSize={"12"}
                  textColor={"orange"}
                  fontFamily={"Franklin"}
                  underline={true}
                  className="cursor-pointer"
                >
                  Modifier
                </Typography>
                |
                <Typography
                  fontSize={"12"}
                  textColor={"orange"}
                  fontFamily={"Franklin"}
                  underline={true}
                  className="cursor-pointer"
                >
                  Suprimer
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-zinc-800">
          <tr>
            <td colSpan={6} className="p-3 text-center rounded-b-25"></td>
          </tr>
        </tfoot>
      </table>
    </LayoutBO>
  );
}
