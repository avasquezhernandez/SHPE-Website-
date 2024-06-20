/* eslint-disable no-unused-vars */
import Nav from "../components/nav";
import Calendar from "../components/calendar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Events() {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/event");
      const json = await response.json();
      if (response.ok) {
        setEvents(json);
      }
    };
    let photo_link = document.querySelector(".photos");
    let events_link = document.querySelector(".events");

    events_link.innerHTML = "Photos";
    events_link.href = "http://localhost:3000/photos";
    photo_link.innerHTML = "Home";
    photo_link.href = "http://localhost:3000/";
    fetchEvents();
  }, []);

  return (
    <>
      <Nav />
      <Calendar />
      <Footer />
    </>
  );
}
