import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import DesignYourTickets from "./Pages/DesignYourTickets";
import WebsiteHeader from "./Components/WebsiteHeader";
import WebsiteFooter from "./Components/WebsiteFooter";
import CreateAccountPage from "./Pages/CreateAccountPage";
import EventListing from "./Components/EventListing";
import Dropdown from "./Components/Dropdown";
import MakeEvent from "./Components/MakeEvent";
import QrCode from "./Components/QrCode";
import TicketDesign from "./Components/TicketDesign";
import Volnteer from "./Components/Volnteer";
import LandingPage from "./Pages/LandingPage";

import Golive from "./Components/Golive";
import UpcomingEvents from "./Pages/UpcomingEvents";

import InputSizesExample from "./Pages/InputSizesExample";
import App from "./App";
import UploadImage from "./Components/UploadImage";

import SelectDate from "./Components/SelectDate";
import VolnteerForm from "./Pages/VolnteerForm";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<App />} />
        <Route path="/" element={<DesignYourTickets />} />
        <Route path="/" element={<WebsiteHeader />} />
        <Route path="/" element={<WebsiteFooter />} />
        <Route path="/cr" element={<CreateAccountPage />} />
        <Route path="/ev" element={<EventListing />} />
        <Route path="/dd" element={<Dropdown />} />
        <Route path="/mv" element={<MakeEvent />} />
        <Route path="/qr" element={<QrCode />} />
        <Route path="/tr" element={<TicketDesign />} />
        <Route path="/vr" element={<Volnteer />} />
        <Route path="/la" element={<LandingPage />} />
        <Route path="/ue" element={<UpcomingEvents />} />

        <Route path="/go" element={<Golive />} />
        <Route path="/vol" element={<VolnteerForm />} />

        <Route path="/input" element={<InputSizesExample />} />

        <Route path="/upload" element={<UploadImage />} />

        <Route path="/date" element={<SelectDate />} />
       
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
