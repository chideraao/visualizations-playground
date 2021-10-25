import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/lines"> Lines & Area</Link>
        </li>
        <li>
          <Link to="/bars">Bars </Link>
        </li>
        <li>
          <Link to="/pie">Pie & Donut</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
