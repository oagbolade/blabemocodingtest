import React, { useState, useEffect } from "react";
import "./App.scss";
import openQuote from "./assets/images/openQuote.svg";
import closingQuotes from "./assets/images/closingQuotes.svg";
import smilingMan from "./assets/images/smilingMan.png";
import smilingLady from "./assets/images/smilingLady2.png";
import miniArc from "./assets/images/miniAcr.svg";
import avatar1 from "./assets/images/avatar1.png";
import rating from "./assets/images/rating.svg";
import emptyRating from "./assets/images/emptyRating.svg";
import { fadeIn, bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fade: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "bounce"),
    animationDuration: "3s",
  },
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce"),
    animationDuration: "3s",
  },
};

function App() {
  const [firstElement, setFirstElement] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstElement(false);
    }, 3000);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="left-navbar"></div>
        <div className="right-navbar">
          <ul className="list-none">
            <li className="">Timeline</li>
            <li className="mx-4-">Peer Review</li>
            <li className="mx-5-">Login</li>
            <li className="signup-list">
              <button className="signup-button">SignUp</button>
            </li>
          </ul>
        </div>
      </nav>
      <section className="flex banner-section">
        <div className="search-form">
          <div className="p-title mb-2">
            Grow your business with real-time reviews
          </div>
          <div className="s-title mb-8">
            Find out more on what people and saying about your company, with
            real time reveiw and data.
          </div>
          <div className="input-form mb-10">
            <input placeholder="Search for Companies" />
            <button className="form-button text-white">Search</button>
          </div>
          <div className="s-title promp-signup">
            Already have an account?{" "}
            <span style={{ color: "#ff6634" }} className="sign-in">
              Sign In
            </span>
          </div>
        </div>
        <div className="banner-img-section">
          <div className="banner-mini-1 p-2">
            <img src={miniArc} alt="loading" />
          </div>
          {firstElement ? (
            <StyleRoot>
              <img
                className="banner-img"
                style={styles.fade}
                src={smilingMan}
                alt="loading"
              />
            </StyleRoot>
          ) : (
            <StyleRoot>
              <img
                className="banner-img"
                style={styles.bounce}
                src={smilingLady}
                alt="loading"
              />
            </StyleRoot>
          )}

          <div className="banner-mini-2 p-2">
            <div className="text-1 ml-2">15K</div>
            <div className="text-2">Employee Reveiws</div>
          </div>
          <div className="banner-mini-3 p-6">
            <div className="text-2 flex mb-4">
              <img src={rating} alt="loading" />
              <img src={rating} alt="loading" />
              <img src={rating} alt="loading" />
              <img src={rating} alt="loading" />
              <img src={emptyRating} alt="loading" />
            </div>
            <div className="text-1 mb-3">
              Great place to work with the good work culture and people skills.
            </div>

            <div className="flex">
              <img className="avatar" src={avatar1} alt="loading" />
              <div className="mt-2">
                <div className="text-2 ml-2">Anonymous</div>
                <div className="text-3 ml-2">Business Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="quote">
        <div className="flex">
          <img src={openQuote} className="quotesImg" alt="loading" />
          <img src={openQuote} className="rightQuote quotesImg" alt="loading" />
        </div>
        {firstElement ? (
          <StyleRoot>
            <div className="ml-4 pl-10 pr-2 quote-text">
              A life spent making mistakes is not only more honorable, but more
              useful than a life spent doing nothing.
            </div>
          </StyleRoot>
        ) : (
          <div className="ml-4 pl-10 pr-2 quote-text">
            If you can't explain it to a six year old, you don't understand it
            yourself
          </div>
        )}
        <div className="flex closingQuotes">
          <img src={closingQuotes} className="quotesImg" alt="loading" />
          <img
            src={closingQuotes}
            className="rightQuote quotesImg"
            alt="loading"
          />
        </div>
      </div>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default App;
