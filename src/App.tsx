import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import openQuote from "./assets/images/openQuote.svg";
import closingQuotes from "./assets/images/closingQuotes.svg";
import smilingMan from "./assets/images/smilingMan.png";
import smilingLady from "./assets/images/smilingLady2.png";
import miniArc from "./assets/images/miniAcr.svg";
import avatar1 from "./assets/images/avatar1.png";
import rating from "./assets/images/rating.svg";
import emptyRating from "./assets/images/emptyRating.svg";
import envelope from "./assets/images/envelope.svg";
import ebay from "./assets/images/ebay.png";
import monster from "./assets/images/monster.png";
import indeed from "./assets/images/indeed.png";
import linkedinImg from "./assets/images/linkedin.png";
import godaddy from "./assets/images/godaddy.png";
import rectangle from "./assets/images/rectangle.png";
import facebook from "./assets/images/social/facebook.svg";
import twitter from "./assets/images/social/twitter.svg";
import linkedin from "./assets/images/social/linkedin.svg";
import { fadeIn, bounceIn } from "react-animations";
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
    animationName: Radium.keyframes(bounceIn, "bounce"),
    animationDuration: "1s",
  },
};

function App() {
  const [firstElement, setFirstElement] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setTimeout(() => {
      setFirstElement(false);
    }, 3000);
  }, []);

  return (
    <div className="my-container">
      <nav className="lg:hidden navbar">
        <div onClick={toggleMenu} className="burgar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {showMenu ? (
          <div className="right-navbar">
            <ul className="block list-none">
              <li style={{ textDecoration: "underline" }} className="">
                Timeline
              </li>
              <li style={{ textDecoration: "underline" }} className="mx-4-">
                Peer Review
              </li>
              <li style={{ textDecoration: "underline" }} className="mx-5-">
                Login
              </li>
              <li className="signup-list">
                <button className="signup-button">SignUp</button>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>

      <nav className="navbar hide-section">
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

      <section className="md:flex banner-section">
        <div className="search-form">
          <div className="justify-content p-title mb-2">
            Grow your business with real-time reviews
          </div>
          <div className="mt-2 md:mt-2 s-title mb-8">
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
        {/* Temp will remove */}
        <div className="hide-section banner-img-section">
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
      <div className="hide-section quote">
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
          <div className="mb-10">
            <ReviewOne />
          </div>
          <div className="">
            <ReviewOne />
          </div>
          <div className="">
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
        <div className="dotted-switches flex">
          <div></div>
          <div className="mx-3"></div>
          <div></div>
        </div>
      </section>
      <section className="md:flex subscribe-section">
        <div className="md:py-20 mx-auto section-1">
          <div className="text-1 justify-content">
            Subscribe to our Newsletter
          </div>
          <div className="mt-2 mb-4 text-2 justify-content-">
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
      <section className="social">
        <div className="social-section">
          <div className="md:flex py-6">
            <img className="mx-auto social-brand" src={ebay} alt="loading" />
            <img
              className="mx-auto social-brand"
              src={linkedinImg}
              alt="loading"
            />
            <img className="mx-auto social-brand" src={indeed} alt="loading" />
            <img className="mx-auto social-brand" src={godaddy} alt="loading" />
            <img className="mx-auto social-brand" src={monster} alt="loading" />
          </div>
        </div>
      </section>
      <section className="adds-section">
        <div className="md:flex mx-auto box-container">
          <div className="box text-center">
            <span className="box-text"> Advertisement</span>
          </div>
          <div className="md:mx-10 box text-center">
            <span className="box-text"> Advertisement</span>
          </div>
          <div className="box text-center">
            <span className="box-text"> Advertisement</span>
          </div>
        </div>

        <div className="mx-auto get-started">
          <div className="main-sec md:flex">
            <div className="sec-1 grid justify-items-center">
              <span className="text">
                Get started today sign up and start reveiwing business.{" "}
              </span>
            </div>
            <div className="sm:mx-auto grid justify-items-center align-middle sec-2 inline-block align-middle">
              <img className="m-0 inline-block" src={rectangle} alt="Loading" />
              <button className="form-button text-white">
                Create free Account
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
      <footer className="lg:flex text-white">
        <div className="hide-section invisible md:visible section-1">
          <div className="about-text">
            This platform for minority groups to express their opinions on
            employment, workplace experiences and rate employers.
          </div>
          <div className="flex mt-8">
            <img className="" src={facebook} alt="Loading" />
            <img className="social-img mx-4" src={twitter} alt="Loading" />
            <img className="social-img" src={linkedin} alt="Loading" />
          </div>
          <div className="md:mt-20 text-2">© Copyright 2021 </div>
        </div>
        <div className="mx-auto md:flex section-2">
          <div className="md:pt-20">
            <span>Company</span>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="pt-20">
            <span>Features</span>
            <ul>
              <li>Timeline</li>
              <li>Peer Review</li>
              <li>Create Account</li>
              <li>Sign In</li>
            </ul>
          </div>
          <div className="pt-20">
            <span>Contact Us</span>
            <ul>
              <li>inquiry@thaapp.com</li>
              <li>1-800-200-300</li>
              <li>54 Curragh birin, Castletroy, Limerick, Ireland</li>
            </ul>
          </div>
        </div>

        <div className="lg:invisible section-1">
          <div className="about-text">
            This platform for minority groups to express their opinions on
            employment, workplace experiences and rate employers.
          </div>
          <div className="flex mt-8 pt-5">
            <img className="" src={facebook} alt="Loading" />
            <img className="social-img mx-4" src={twitter} alt="Loading" />
            <img className="social-img" src={linkedin} alt="Loading" />
          </div>
          <div className="md:mt-20 text-2">© Copyright 2021 </div>
        </div>
        <div className="py-4"></div>
      </footer>
    </div>
  );
}

export default App;
