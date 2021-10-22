import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/lines"> Lines & Area</Link>
      <Link to="/bars">Bars </Link>
    </div>
  );
}

export default Home;
