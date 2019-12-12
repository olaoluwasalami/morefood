import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import Morefood from './Morefood.js';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
    <Morefood/>
  </BrowserRouter>,
  document.getElementById("root")
);




