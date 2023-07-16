import React, { useState } from "react";
import classes from "./FastPay.module.css";
import { Link } from "react-router-dom";
import BackDrop from "../components/BackDrop";

const FastPay = () => {
  const [open, isOpen] = useState(false);
  const [plate, isPlate] = useState("");

  const openingPlate = () => {
    isOpen(true);
  };
  const cancleEvent = () => {
    isOpen(false);
  };

  const savePlate = (e) => {
    localStorage.setItem("Plate", plate);
    console.log("Saved " + localStorage.getItem("Plate"));
    isOpen(false);
  };
  return (
    <div className="App">
      <div className={classes.main + " main"}>
        <BackDrop />
        <p className={classes.title}>BRZO PLAĆANJE</p>
        <h4>IZABERI LOKACIJU</h4>
        <div className={classes.options + " options"}>
          <Link to="/tuzla">Tuzla</Link>
          <Link to="#zenica">Zenica</Link>
        </div>
        {open ? (
          <>
            <input
              placeholder="Unesi npr. A12-B-123"
              onChange={(e) => isPlate(e.target.value)}
            ></input>{" "}
            <button onClick={savePlate}>Spremi</button>
            <button onClick={cancleEvent}>Odustani</button>
          </>
        ) : (
          <button onClick={openingPlate}>Spremi registarske oznake?</button>
        )}
        <p className="footer">mojparking.ba</p>
      </div>
    </div>
  );
};

export default FastPay;
