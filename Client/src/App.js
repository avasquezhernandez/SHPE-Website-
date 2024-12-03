


import "../src/styles/App.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Photos from "./Pages/photos";
import Unknown from "./Pages/no_page";
import Contact from "./Pages/contact_us";
import Sponsorship from "./Pages/Sponsorship";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="*" element={<Unknown />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
