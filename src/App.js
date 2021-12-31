import React from "react";
import GoogleMap from "./components/GoogleMap";
import Navbar from "./components/Navbar";
import FormAppartmentAdd from "./components/FormAppartmentAdd";

import "./App.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />

      <FormAppartmentAdd />
      <div className="container-fluid p-0">
        <div className="col-2">
          <h5>Здесь должно буть окно со списком из БД</h5>
        </div>
        <div className="col-10">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default App;
