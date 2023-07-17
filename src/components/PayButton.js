import React, { useEffect, useState } from "react";
import classes from "./PayButton.module.css";
import { Link } from "react-router-dom";

const PayButton = (props) => {
  const [body, isBody] = useState("Unesite Vaše registarske oznake");
  const [numH, isNumHourly] = useState(12);
  const [numD, isNumDaily] = useState(15);
  const [priceHour, isPriceHour] = useState("");
  const [priceDay, isPriceDay] = useState("");
  const [place, isPlace] = useState("");

  useEffect(() => {
    isPlace(props.name);
    if (localStorage.getItem("Plate")) {
      isBody(localStorage.getItem("Plate"));
    }
    if (props.zone === 0) {
      isNumHourly(10);
      isNumDaily(13);
      isPriceHour("2.00");
      isPriceDay("6.00");
    }
    if (props.zone === 1) {
      isNumHourly(11);
      isNumDaily(14);
      isPriceHour("1.00");
      isPriceDay("5.00");
    }
    if (props.zone === 2) {
      isNumHourly(12);
      isNumDaily(15);
      isPriceHour("0.50");
      isPriceDay("4.00");
    }
  }, [props]);

  return (
    <div className={classes.pay}>
      <h3>{place}</h3>
      {props.zone !== 3 && (
        <>
          <p>1 SAT</p>
          <Link to={"sms:+3878335" + numH + ";?&body=" + body}>
            Plati: {priceHour}KM
          </Link>
          <p>DAN</p>
          <Link to={"sms:+3878335" + numD + ";?&body=" + body}>
            Plati {priceDay}KM
          </Link>
        </>
      )}
      {props.zone ===3 && <p>Plaćanje na rampi (00-24)</p>}
    </div>
  );
};

export default PayButton;
