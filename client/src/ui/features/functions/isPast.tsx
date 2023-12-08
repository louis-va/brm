export function estAnterieure(dateStr: string, hourStr: string): boolean {
  const [day, month] = dateStr.split("/");
  const [hour, minute] = hourStr.split(":");

  const ticketDate = new Date(
    new Date().getFullYear(),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hour),
    parseInt(minute)
  );
  const currentDate = new Date();

  return ticketDate > currentDate;
}
