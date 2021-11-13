import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap, { Power3, Power4 } from "gsap";
import { ReactComponent as Left } from "../assets/left_arrow.svg";

function Home() {
  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    var tl = gsap.timeline();
    tl.to(screen, {
      duration: 2.5,
      height: "100%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 2.5,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    gsap
      .to(body, {
        duration: 3,
        css: {
          opacity: "0.99",
          pointerEvents: "auto",
          ease: Power4.easeInOut,
        },
      })
      .delay(4.5);
    return () => {
      gsap.to(body, {
        duration: 3,
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  });

  return (
    <div className="home">
      <div className="load-container">
        <div
          className="load-screen1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={(el) => (screen = el)}
        >
          <h1
            style={{
              backgroundColor: "transparent",
            }}
          >
            WELCOME, PRECIOUS
          </h1>
        </div>
      </div>
      <div className="headd" ref={(el) => (body = el)}>
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
    </div>
  );
}

export default Home;
