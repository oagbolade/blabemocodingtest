import React from "react";
import rating from "./../../assets/images/rating.svg";
import emptyRating from "./../../assets/images/emptyRating.svg";
import briefcase from "./../../assets/images/briefcase.svg";
import avatar1 from "./../../assets/images/avatar1.png";

export default function ReviewOne() {
  return (
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
          Great place to work with the good work culture and people skills.
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
  );
}
