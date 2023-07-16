import React from "react";
import register from "../assets/register.png";
import login from "../assets/login.png";
import mapa from "../assets/map.png";
import pay from "../assets/pay.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="App">
      <div className="main">
        <p className="title">Dobrodošli!</p>
        <div className="options">
          <Link to="#">
            <h4>REGISTRUJ SE</h4>
            <img src={register} alt="reg" />
          </Link>
          <Link to="#">
            <h4>MAPA</h4>
            <img src={mapa} alt="reg" />
          </Link>
          <Link to="#">
            <h4>PRIJAVA</h4>
            <img src={login} alt="reg" />
          </Link>
          <Link to="/fastpay">
            <h4>BRZO PLAĆANJE</h4>
            <img src={pay} alt="reg" />
          </Link>
        </div>
        <p className="footer">mojparking.ba</p>
      </div>
    </div>
  );
};

export default MainPage;
