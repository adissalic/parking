import React, { useEffect, useState } from "react";
import classes from "./Tuzla.module.css";

import { Link } from "react-router-dom";
import BackDrop from "../components/BackDrop";

const Tuzla = () => {
  const [text, setText] = useState("Unesite vaše registarske oznake");

  useEffect(() => {
    setText(localStorage.getItem("Plate"));
    console.log(text);
  }, [text]);

  return (
    <div className="App">
      <div className={classes.main + " main"}>
        <BackDrop />
        <p className={classes.title}>TUZLA</p>
        <h4>1 SAT</h4>
        <div className={classes.options + " options"}>
          <Link to={"sms:+387833510;&body=" + text}>ZONA 0</Link>
          <Link to={"sms:+387833511;&body=" + text}>ZONA 1</Link>
          <Link to={"sms:+387833512;&body=" + text}>ZONA 2</Link>
        </div>
        <h4>DNEVNA</h4>
        <div className={classes.options + " options"}>
          <Link to={"sms:+387833513;&body=" + text}>ZONA 0</Link>
          <Link to={"sms:+387833514;&body=" + text}>ZONA 1</Link>
          <Link to={"sms:+387833515;&body=" + text}>ZONA 2</Link>
        </div>
        <p className="footer">mojparking.ba</p>
      </div>
    </div>
  );
};

export default Tuzla;
