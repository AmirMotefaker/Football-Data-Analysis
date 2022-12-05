import React from "react";
import ReactDOM from "react-dom/client";
import Appcountries from "./components/Appcountries";
import Title from "./components/Title";

const elem = ReactDOM.createRoot(document.getElementById('root'));
elem.render(
  <React.StrictMode>
    <Title/>
   <Appcountries />
   </React.StrictMode>
);
