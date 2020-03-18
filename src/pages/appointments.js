import React from "react";

import Navbar from "../components/Navbar/Navbar";
import AppointmentsForm from "../components/Appointments/Appointments";

const Appointments = () => {
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "black",
        width: "100%",
        height: "100vh"
      }}
    >
      <Navbar />
      <AppointmentsForm />
    </div>
  );
};

export default Appointments;
