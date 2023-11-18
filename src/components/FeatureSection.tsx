import React from "react";

type FeatureProps = {
  icon: React.ReactElement;
  title: string;
  title2: string;
};

const FeatureSection: React.FC<FeatureProps> = ({ icon, title, title2 }) => (
  <div className="feature-section">
    <p className="feature-icon">{icon}</p>
    <h2>{title}</h2>
    <br />
    <span>{title2}</span>
  </div>
);

export default FeatureSection;