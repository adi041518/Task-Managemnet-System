import { useEffect, useRef, useState } from "react";

interface CustomDatePickerProps {
  value: string;
  onChange: (date: string) => void;
}

type ViewType = "date" | "month" | "year";

export default function CustomDatePicker({
  value,
  onChange,
}: CustomDatePickerProps) {
  const today = new Date();

  const [show, setShow] = useState<boolean>(false);
  const [view, setView] = useState<ViewType>("date");
  const [month, setMonth] = useState<number>(today.getMonth());
  const [year, setYear] = useState<number>(today.getFullYear());
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [yearPageStart, setYearPageStart] = useState<number>(
    year - (year % 12)
  );

  // Helpers
  const daysInMonth: number = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const firstDay: number = new Date(
    year,
    month,
    1
  ).getDay();

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          e.target as Node
        )
      ) {
        setShow(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handler
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handler
      );
  }, []);

  // Sync when parent resets value
  useEffect(() => {
    if (!value) return;

    const parts = value.split("/");
    if (parts.length !== 3) return;

    const [, m, y] = parts;

    setMonth(Number(m) - 1);
    setYear(Number(y));
  }, [value]);

  const selectDate = (day: number) => {
    const formattedDate = `${String(day).padStart(
      2,
      "0"
    )}/${String(month + 1).padStart(
      2,
      "0"
    )}/${year}`;

    onChange(formattedDate);
    setShow(false);
  };

  return (
    <div
      className="position-relative"
      ref={wrapperRef}
    >
      {/* Input */}
      <input
        type="text"
        className="form-control"
        readOnly
        value={value}
        placeholder="Date Of Birth"
        onClick={() => {
          setView("date");
          setShow((prev) => !prev);
        }}
        style={{
          cursor: "pointer",
          height: "58px",
        }}
      />

      {/* Calendar */}
      {show && (
        <div className="border shadow p-2 bg-white position-absolute w-100 mt-1 z-3">

          {/* Header */}
          <div className="d-flex justify-content-center fw-bold mb-2">
            {view === "date" && (
              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setView("month")
                }
              >
                {new Date(
                  year,
                  month
                ).toLocaleString(
                  "default",
                  { month: "long" }
                )}{" "}
                {year}
              </span>
            )}

            {view === "month" && (
              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setView("year")
                }
              >
                {year}
              </span>
            )}

            {view === "year" && (
              <div className="d-flex justify-content-between w-100">
                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={() =>
                    setYearPageStart(
                      (prev) =>
                        prev - 12
                    )
                  }
                >
                  ‹
                </button>

                <span>
                  Select Year
                </span>

                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={() =>
                    setYearPageStart(
                      (prev) =>
                        prev + 12
                    )
                  }
                >
                  ›
                </button>
              </div>
            )}
          </div>

          {/* Grid */}
          <div
            className="d-grid"
            style={{
              gridTemplateColumns:
                view === "date"
                  ? "repeat(7, 1fr)"
                  : "repeat(3, 1fr)",
            }}
          >
            {/* Date View */}
            {view === "date" && (
              <>
                {[
                  "Su",
                  "Mo",
                  "Tu",
                  "We",
                  "Th",
                  "Fr",
                  "Sa",
                ].map((d) => (
                  <div
                    key={d}
                    className="text-center fw-bold small"
                  >
                    {d}
                  </div>
                ))}

                {Array(firstDay)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} />
                  ))}

                {Array.from(
                  { length: daysInMonth },
                  (_, i) => i + 1
                ).map((day) => (
                  <button
                    key={day}
                    type="button"
                    className="btn btn-sm m-1"
                    onClick={() =>
                      selectDate(day)
                    }
                  >
                    {day}
                  </button>
                ))}
              </>
            )}

            {/* Month View */}
            {view === "month" &&
              Array.from(
                { length: 12 },
                (_, i) => (
                  <button
                    key={i}
                    type="button"
                    className="btn btn-sm m-1"
                    onClick={() => {
                      setMonth(i);
                      setView("date");
                    }}
                  >
                    {new Date(
                      0,
                      i
                    ).toLocaleString(
                      "default",
                      {
                        month: "short",
                      }
                    )}
                  </button>
                )
              )}

            {/* Year View */}
            {view === "year" &&
              Array.from(
                { length: 12 },
                (_, i) =>
                  yearPageStart + i
              ).map((y) => (
                <button
                  key={y}
                  type="button"
                  className="btn btn-sm m-1"
                  onClick={() => {
                    setYear(y);
                    setView("month");
                  }}
                >
                  {y}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
