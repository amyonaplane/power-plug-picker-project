import React from "react";

interface EmptyStateProps {
  hasSelectedCountries: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  hasSelectedCountries,
}) => {
  if (hasSelectedCountries) {
    return null;
  }

  return (
    <div className="empty-state">
      <p>👆 Select one or more countries to see their power plug types</p>
    </div>
  );
};
