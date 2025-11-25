import React from "react";
import { plugDescriptions } from "../data/countryData";

interface PlugResultsProps {
  uniquePlugTypes: string[];
}

export const PlugResults: React.FC<PlugResultsProps> = ({
  uniquePlugTypes,
}) => {
  if (uniquePlugTypes.length === 0) {
    return null;
  }

  return (
    <div className="plug-results">
      <h2>Required Power Plug Types:</h2>
      <div className="plug-list">
        {uniquePlugTypes.map((plugType) => (
          <div key={plugType} className="plug-card">
            <div className="plug-type-badge">{plugType}</div>
            <div className="plug-description">{plugDescriptions[plugType]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
