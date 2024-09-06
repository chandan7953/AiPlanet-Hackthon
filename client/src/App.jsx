import React from "react";
import Navbar from "./components/Navbar";
import ChallengeForm from "./components/ChallengeForm";
import CustomFileInput from "./components/CustomFileInput";
import DetailPage from "./components/DetailPage";
import ChallengeList from "./components/ChallengeList";

const App = () => {
  return (
    <div>
      <Navbar />
      <ChallengeList />
    </div>
  );
};

export default App;
