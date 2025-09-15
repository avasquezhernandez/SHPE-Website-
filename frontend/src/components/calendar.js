import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Calendar() {
  const [events, setEvent] = useState([]);
  useEffect(() => {
    axios
      .get("/api/event")
      .then((response) => {
        setEvent(response.data);
      })
      .catch((err) => {
        console.error("cannot get items:", err);
      });
  }, []);
  return (
    <div className="Calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}
