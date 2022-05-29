import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF3H-LTyPl-Pql1UaLM6-KIprIhlt42JivwgsCVkgTX8b5sOJeRZ6SITTLqtFA2lBAhI&usqp=CAU"
        alt="logo"
        width="200px"
      />
      <button
        className="header_button"
        onClick={() => {
          navigate("/");
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
