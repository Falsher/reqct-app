import React from "react";
import GoogleMap from "./components/GoogleMap";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />

      {/* <FormAppartmentAdd /> */}
      <div className="container-fluid p-0">
        <div className="col-2"></div>
        <div className="col-10">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default App;
