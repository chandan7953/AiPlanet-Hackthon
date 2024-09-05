import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import InputField from "./InputField";
import uploadIcon from "../assets/icons/upload.svg";

const BASE_URL = import.meta.env.VITE_API_URL;

const ChallengeForm = ({ isEditing }) => {
  const [formData, setFormData] = useState({
    challengeName: "",
    startDate: "",
    endDate: "",
    description: "",
    image: null,
    levelType: "Easy",
  });
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchChallengeDetails = async () => {
      try {
        if (isEditing && id) {
          const response = await axios.get(`${BASE_URL}/api/challenges/${id}`);
          setFormData(response.data);
          setImagePreview(response.data.image); // Set the image preview if editing
        }
      } catch (error) {
        console.error("There was an error fetching the challenge!", error);
        setError("Failed to fetch challenge details.");
      }
    };

    fetchChallengeDetails();
  }, [isEditing, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));

    // Create a preview URL for the selected image
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate date inputs
    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      setError("End date must be later than start date.");
      return;
    }

    const url = isEditing
      ? `${BASE_URL}/api/challenges/${id}`
      : `${BASE_URL}/api/challenges`;
    const method = isEditing ? "put" : "post";

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      await axios({ method, url, data: formDataToSend });
      // navigate("/challenges");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setError("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="container-challengeForm">
      <h2>{isEditing ? "Edit Challenge" : "Create Challenge"}</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}

        <InputField
          label="Challenge Name"
          id="challengeName"
          type="text"
          placeholder="Enter Challenge Name"
          value={formData.challengeName}
          onChange={handleChange}
        />

        <InputField
          label="Start Date"
          id="startDate"
          type="datetime-local"
          value={formData.startDate}
          onChange={handleChange}
        />

        <InputField
          label="End Date"
          id="endDate"
          type="datetime-local"
          value={formData.endDate}
          onChange={handleChange}
        />

        <div className="input-container">
          <label className="input-label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={10}
            className="textarea-field"
            required
          ></textarea>
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="image">
            Image
          </label>

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ marginTop: "10px", maxWidth: "100%", height: "auto" }}
            />
          )}
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="levelType">
            Level Type
          </label>
          <select
            id="levelType"
            name="levelType"
            value={formData.levelType}
            onChange={handleChange}
            required
            className="selection-field"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button type="submit" className="challenge-submit-btn">
          {isEditing ? "Update Challenge" : "Create Challenge"}
        </button>
      </form>
    </div>
  );
};

export default ChallengeForm;
