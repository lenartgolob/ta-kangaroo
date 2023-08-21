import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ResetPassword from "./routes/ResetPassword";
import EssentialBudget from "./routes/EssentialBudget";
import EssentialComfort from "./routes/EssentialComfort";
import PlusBudget from "./routes/PlusBudget";
import PlusComfort from "./routes/PlusComfort";
import Custom from "./routes/Custom";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/essential-budget" element={<EssentialBudget />} />
        <Route path="/essential-comfort" element={<EssentialComfort />} />
        <Route path="/plus-budget" element={<PlusBudget />} />
        <Route path="/plus-comfort" element={<PlusComfort />} />
        <Route path="/custom" element={<Custom />} />
        {/* <Navbar />
      <Home />
      <Destination />
      <Trip />
      <Footer /> */}
      </Routes>
    </div>
  );
}

export default App;
