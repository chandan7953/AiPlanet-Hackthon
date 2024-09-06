import React from "react";
import "./challengeList.css";
import rocketIcon from "../assets/icons/rocketIcon.svg";
import aiIcon from "../assets/icons/aiIcon.svg";
import datascience from "../assets/icons/datascience.svg";
import aiHosted from "../assets/icons/aiHosted.svg";

const ChallengeList = () => {
  return (
    <div>
      <div className="challenge-section">
        {/* Main Banner Section */}
        <div className="challenge-banner">
          <div className="banner-content">
            <div className="text-section">
              <h1>Accelerate Innovation with Global AI Challenges</h1>
              <p>
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
              </p>
              <button className="create-challenge-btn">Create Challenge</button>
            </div>
            <div className="image-section">
              <img src={rocketIcon} alt="Rocket" />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stact-card">
            <img src={aiIcon} alt="AI Icon" />
            <div className="stat-box">
              <p>100K+</p>
              <span>AI model submissions</span>
            </div>
          </div>
          <div className="stact-card">
            <img src={datascience} alt="Data Scientists Icon" />

            <div className="stat-box">
              <p>50K+</p>
              <span>Data Scientists</span>
            </div>
          </div>
          <div className="stact-card">
            <img src={aiHosted} alt="AI Challenges hosted< Icon" />

            <div className="stat-box">
              <p>100+</p>
              <span>AI Challenges hosted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeList;
