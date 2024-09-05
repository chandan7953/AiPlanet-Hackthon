import React, { useState } from "react";
import uploadIcon from "../assets/icons/upload.svg";
import fillImageIcon from "../assets/icons/bi_image-fill.svg";

const CustomFileInput = ({ imagePreview, onChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div
      className="customFileContainer"
      style={!imagePreview ? { border: "1px solid #ccc" } : {}}
    >
      <input
        type="file"
        id="fileInput"
        onChange={onChange}
        className="customFileHiddenInput"
      />
      {imagePreview ? (
        <>
          <img
            src={imagePreview}
            alt="choose photo"
            className="
      choose-image"
          />
          <label htmlFor="fileInput" className="filecustomButton">
            <img src={fillImageIcon} alt="fill Image Icon" />
            <p style={{ color: "#44924c" }}>Change image</p>
          </label>
        </>
      ) : (
        <label
          htmlFor="fileInput"
          className="filecustomButton"
          style={{ justifyContent: "center" }}
        >
          <p>Upload</p>
          <img src={uploadIcon} alt="Upload Icon" />
        </label>
      )}
    </div>
  );
};

export default CustomFileInput;
