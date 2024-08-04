import React from "react";
import { useNavigate } from "react-router-dom";
import Subsection from "../components/Subsection";
import "./Home.css";
import logo from '../components/logo.png';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="Home">

      <div className="Hero-section">
        <div className="Hero-content">
          <img src={logo} alt="DryEye AI Logo" className="Hero-logo" />

          <h3>Welcome to,</h3>
          <h1>DryEye AI</h1>

          <p>
            Our AI-powered tool provides accurate drought predictions to help
            governments and communities prepare and respond effectively.
          </p>
          <div className="separator"></div>

        </div>
      </div>

      <Subsection subtitle="Our Mission" className="Mission">
        <p>
          At DryEye AI, we aim to support marginalized agricultural workers affected by climate change.
          Farmers, many of whom operate with limited resources, face substantial challenges as climate conditions worsen.
          These individuals are crucial to our food systems yet often suffer the most from environmental crises while receiving minimal support.

        </p>
        <p>
          According to recent studies, over 80% of small-scale farmers struggle
          with the financial effects of climate-induced droughts. This makes it crucial
          to provide effective tools to reduce these challenges and help farmers.
        </p>
        <p>
          DryEye AI was developed to address this critical need. Our tool leverages
          historical climate data and advanced computer vision technology to predict and analyze
          drought conditions specific to your location. By forecasting upcoming droughts,
          we enable farmers and governments to take assertive measures. Additionally,
          our system helps identify early signs of drought, offering vital insights to prevent and manage these events before they escalate.
        </p>
        <p>
          Through innovation and support, DryEye AI aims to empower those who are most
          vulnerable to the impacts of climate change, ensuring that they have the resources
          and knowledge necessary to thrive despite the growing challenges.
        </p>
        <p>-</p>
        <p>Sincerely,</p>
        <p>DryEye Team.</p>

      </Subsection>
      <div className="separator"></div>

      <Subsection subtitle={""} className="Prediction">
        <h2 className="drought-prediction-title">Drought Prediction</h2>
        <div className="Prediction-options">
          <div className="Prediction-option">
            <h3>Manual Prediction</h3>
            <p>
              Enter specific parameters to manually detect drought conditions.
            </p>
            <button onClick={() => handleNavigate('/manual')} className="Home-button">
              Try Now!
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
              Try Now!
            </button>
          </div>
        </div>
      </Subsection>


      <Subsection
        subtitle="Learn More About Preventative Measures"
        className="Preventative-measures"
      >
        <p>
          After using our tool, visit a collection of articles to deepen your
          understanding of drought management and discover effective preventative measures.
        </p>
        <button
          onClick={() => window.open('https://smallfarms.oregonstate.edu/smallfarms/15-ways-help-mitigate-drought-your-farm-season-and-beyond', '_blank')}
          className="Home-button"
        >
          Explore Preventative Measures
        </button>

      </Subsection>
    </div>
  );
};

export default Home;
