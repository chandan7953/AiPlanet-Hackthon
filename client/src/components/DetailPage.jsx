import React from "react";
import uploadIcon from "../assets/icons/upload.svg"; // Assuming you have an icon
import "./DetailPage.css"; // Import styles for the page

const DetailPage = () => {
  return (
    <div className="detail-page">
      {/* Challenge Details */}
      <div className="challenge-details">
        <div className="challenge-header">
          <div className="challenge-start-time">
            <span className="start-time-text">
              Starts on 17th Jun'22 09:00 PM (India Standard Time)
            </span>
          </div>
          <h1 className="challenge-title">
            Data Sprint 72 - Butterfly Identification
          </h1>
          <p className="challenge-description">
            Identify the class to which each butterfly belongs to
          </p>
          <div className="difficulty">
            <img
              src={uploadIcon}
              alt="Difficulty"
              className="difficulty-icon"
            />
            <span className="difficulty-text">Easy</span>
          </div>
        </div>
      </div>
      {/* Overview Section */}
      <div className="overview">
        <h2>Overview</h2>
        <p>
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera...
        </p>
      </div>

      {/* Buttons Section */}
      <div className="action-buttons">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default DetailPage;
