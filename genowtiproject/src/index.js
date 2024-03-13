// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Logroute from "./Logroute";

ReactDOM.render(
    <React.StrictMode>
        <Router>
        <Logroute />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);