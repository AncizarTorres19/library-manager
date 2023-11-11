import React, { useState } from "react";
import "./tabs.css"; // Asegúrate de importar tus estilos CSS aquí
import TableBooks from "./TableBooks";

export const DashboardTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <></>
  );
};
