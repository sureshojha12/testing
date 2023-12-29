import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Container = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={
        darkMode ? `Container Container-dark` : `Container Container-light`
      }
    >
      <center>
        <h1>SURESH OJHA</h1>
      </center>
    </div>
  );
};

export default Container;
