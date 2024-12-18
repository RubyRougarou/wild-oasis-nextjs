"use client";
import ReservationCard from "@/app/_components/ReservationCard";
import { useOptimistic } from "react";
import { deleteReservation } from "@/app/_lib/actions";

export default function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currentBookings, bookingId) =>
      currentBookings.filter((booking) => booking.id !== bookingId),
  );

  async function handleDeleteBooking(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          onDelete={handleDeleteBooking}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
