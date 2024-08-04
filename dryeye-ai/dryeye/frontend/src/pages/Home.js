import React from "react";
import { useNavigate } from "react-router-dom";
import Subsection from "../components/Subsection";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="Home">
      <div className="Hero-section">
        <h2>Welcome to DryEye AI</h2>
        <p>
          Our AI-powered tool provides accurate drought predictions to help
          governments and communities prepare and respond effectively.
        </p>
        <button
          onClick={() => handleNavigate("/prediction")}
          className="Home-button"
        >
          Try Now
        </button>
      </div>

      <Subsection subtitle="Our Mission" className="Mission">
        <p>
          Marginalized agricultural workers, who form the backbone of our food
          system, are among the most affected by climate change. These
          individuals often work with limited resources, making any setback,
          like a drought, a significant challenge to their capabilities, output,
          and income. Despite their crucial role, their plight is often
          overlooked, especially during times of difficulty.
        </p>
        <p>
          To address this issue, we developed DryEye AI. Our tool predicts and
          analyzes drought periods using historical data to provide accurate
          forecasts. It can predict the onset and duration of droughts, and our
          computer vision model can help detect early signs of droughts in your
          area.
        </p>
        <p>
          This initiative aims to bring attention to these critical issues and
          support farmers in conducting climate smart agriculture, which helps
          reduce the impact of such incidents.
        </p>
        <p>
          Climate smart agriculture involves practices that increase
          productivity while reducing greenhouse gas emissions and enhancing
          resilience to climate change. DryEye AI contributes by offering
          insights that help farmers make informed decisions to mitigate the
          effects of drought.
        </p>
      </Subsection>

      <Subsection subtitle={"Drought Prediction"} className="Prediction">
        <div className="Prediction-options">
          <div className="Prediction-option">
            <h3>Manual Prediction</h3>
            <p>
              Enter specific parameters to manually predict drought conditions
              in your area.
            </p>
            <button
              onClick={() => handleNavigate("/manual-prediction")}
              className="Home-button"
            >
              Manual Prediction
            </button>
          </div>
          <div className="Prediction-option">
            <h3>Automatic Prediction</h3>
            <p>
              Use automated tools to predict drought based on real-time data and
              analysis.
            </p>
            <button
              onClick={() => handleNavigate("/automatic-prediction")}
              className="Home-button"
            >
              Automatic Prediction
            </button>
          </div>
        </div>
      </Subsection>
      <Subsection
        subtitle="Learn More About Preventative Measures"
        className="Preventative-measures"
      >
        <p>
          After using our tool, check out our dedicated page for preventative
          measures to manage drought conditions effectively.
        </p>
        <button
          onClick={() => handleNavigate("/preventative-measures")}
          className="Home-button"
        >
          Explore Preventative Measures
        </button>
      </Subsection>
    </div>
  );
};

export default Home;
