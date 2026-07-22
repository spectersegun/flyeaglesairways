"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type BookingContextValue = {
  open: boolean;
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  // Modal is CLOSED by default — fixes the "opens on load" issue.
  const [open, setOpen] = useState(false);
  return (
    <BookingContext.Provider
      value={{
        open,
        openBooking: () => setOpen(true),
        closeBooking: () => setOpen(false),
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within <BookingProvider>");
  return ctx;
}

/** Shared mailto builder for jet enquiries. */
export function jetMailto(jet: string) {
  const subject = `Booking Enquiry — Eagle Airways (${jet})`;
  const body = [
    `Aircraft: ${jet}`,
    "Full name:",
    "Route (from / to):",
    "Preferred dates:",
    "Passengers:",
    "Service (Business / Lifestyle / Leasing / Private Dinner):",
    "Additional notes:",
    "",
  ].join("\n");
  return `mailto:info@flyeagleairways.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
