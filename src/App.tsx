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
import briefcase from "./assets/images/briefcase.svg";
import envelope from "./assets/images/envelope.svg";
import ebay from "./assets/images/ebay.png";
import monster from "./assets/images/monster.png";
import indeed from "./assets/images/indeed.png";
import linkedin from "./assets/images/linkedin.png";
import godaddy from "./assets/images/godaddy.png";
import { fadeIn, bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ReviewOne from "./components/Reviews/ReviewOne";

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
                className="banner-img secondary-img"
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
      <section className="p-6">
        <div className="review-heading text-center mb-20">
          <div className="heading-1 mb-2">Featured Reviews</div>
          <div className="heading-2">
            Here are some from the review been done by some of the employees on
            this platform.
          </div>
        </div>
        <div className="review-section mx-auto">
          <div className="review-box">
            <div className="p-6">
              <div className="text-2 flex mb-4">
                <img src={rating} alt="loading" />
                <img src={rating} alt="loading" />
                <img src={rating} alt="loading" />
                <img src={rating} alt="loading" />
                <img src={emptyRating} alt="loading" />
                <span className="num-rating">4.0</span>
              </div>
              <div className="text-1 mb-3">
                Great place to work with the good work culture and people
                skills.
              </div>

              <div className="flex mb-3">
                <div className="flex-1- mid-text-1 p-1 text-center">
                  sexual assault
                </div>
                <div className="mt-2 mid-text-2">
                  <img className="inline mr-2" src={briefcase} alt="loading" />
                  Google
                </div>
              </div>
            </div>

            <div className="avatar-section p-5">
              <div className="flex avatar-section pt-4-">
                <img className="avatar" src={avatar1} alt="loading" />
                <div className="mt-2">
                  <div className="text-2 ml-2">Anonymous</div>
                  <div className="text-3 ml-2">Business Analysis</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-20-">
            <ReviewOne />
          </div>
          <div>
            <ReviewOne />
          </div>

          <div>
            <ReviewOne />
          </div>
          <div className="mx-20-">
            <ReviewOne />
          </div>
          <div>
            <ReviewOne />
          </div>
        </div>
      </section>
      <section className="flex subscribe-section">
        <div className="py-20 mx-auto section-1">
          <div className="text-1">Subscribe to our Newsletter</div>
          <div className="mt-2 mb-4 text-2 justify-content">
            Get latest update lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here
          </div>
          <div>
            <div className="input-form mb-10">
              <input placeholder="Enter a valid email address" />
              <button className="ml-2 form-button text-white">Submit</button>
            </div>
          </div>
        </div>
        <div className="section-2">
          <img className="mx-auto py-20" src={envelope} alt="loading" />
        </div>
      </section>
      <section className="social-section">
        <div className="flex py-6">
          <img className="mx-auto" src={ebay} alt="loading" />
          <img className="mx-auto" src={linkedin} alt="loading" />
          <img className="mx-auto" src={indeed} alt="loading" />
          <img className="mx-auto" src={godaddy} alt="loading" />
          <img className="mx-auto" src={monster} alt="loading" />
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
