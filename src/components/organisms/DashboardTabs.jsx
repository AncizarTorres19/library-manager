import React, { useState } from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Tabs, Tab, Box, Grid } from "@mui/material";
import "./tabs.css"; // Asegúrate de importar tus estilos CSS aquí
import TableBooks from "./TableBooks";

export const DashboardTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12} className="tabs-container">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        className="tabs"
        sx={{ display: 'inline-block'}}
      >
        <Tab
          icon={<AutoStoriesIcon className="tab-icon" />}
          label="Libros"
          className={`tab ${value === 0 ? "active" : ""}`}
        />
        <Tab
          icon={<ContactMailIcon className="tab-icon" />}
          label="Estudiantes"
          className={`tab ${value === 1 ? "active" : ""}`}
        />
        <Tab
          icon={<PersonPinIcon className="tab-icon" />}
          label="Profesores"
          className={`tab ${value === 2 ? "active" : ""}`}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TableBooks />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Contenido de la pestaña Estudiantes
      </TabPanel>
      <TabPanel value={value} index={2}>
        Contenido de la pestaña Profesores
      </TabPanel>
    </Grid>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{ width: '100%', height: '100%', background: '#fff' }}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
