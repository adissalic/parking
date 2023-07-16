import React from "react";
import { Link, useNavigate } from "react-router-dom";
import back from "../assets/back.png";

const BackDrop = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Link onClick={goBack}>
      <img src={back} alt="back"></img>
    </Link>
  );
};

export default BackDrop;
