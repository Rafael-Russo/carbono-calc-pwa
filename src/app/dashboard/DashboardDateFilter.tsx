"use client";
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function DashboardDateFilter() {
  const [range, setRange] = useState<[Date | null, Date | null]>([new Date(), null]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fecha o popup quando clica fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const [startDate, endDate] = range;
  const formatted =
    startDate &&
    (endDate ? `${format(startDate, "MM/dd/yyyy")} - ${format(endDate, "MM/dd/yyyy")}` : format(startDate, "MM/dd/yyyy"));

  return (
    <div className="relative inline-block" ref={ref}>
      {/* Único input visual */}
      <input
        type="text"
        readOnly
        value={formatted || ""}
        onClick={() => setOpen((prev) => !prev)}
        className="border border-[var(--green)] rounded px-2 py-1 cursor-pointer"
      />
      {open && (
        <div className="absolute z-10 mt-2 bg-white border border-[var(--green)] rounded p-4">
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update: [Date | null, Date | null]) => {
              setRange(update);
            }}
            inline
            calendarClassName="bg-white text-[var(--green)] border border-[var(--green)] rounded"
          />
          <div className="mt-4 text-right">
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-1 border border-[var(--green)] rounded text-[var(--green)] hover:bg-[var(--green)] hover:text-white transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
