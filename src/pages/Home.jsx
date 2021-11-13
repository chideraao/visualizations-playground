import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Left } from "../assets/left_arrow.svg";

function Home() {
  return (
    <div className="home">
      <div>
        <Link to="/lines">
          {" "}
          Lines & Area <Left />
        </Link>
        <Link to="/ohlc-and-candlestick">
          OHLC & Candlesticks <Left />
        </Link>
        <Link to="/bars">
          Bars <Left />{" "}
        </Link>
        <Link to="/maps">
          Maps <Left />
        </Link>
        <Link to="/pie">
          Pie & Donut <Left />
        </Link>
        <Link to="/scatter">
          Bubble & Scatter <Left />
        </Link>
      </div>
      <div className="footer">
        <span>
          {" "}
          Made with &#x2764;&#xfe0f; by{" "}
          <a
            href="https://dhera.dev/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Chidera Okeke
          </a>
        </span>
      </div>
    </div>
  );
}

export default Home;
