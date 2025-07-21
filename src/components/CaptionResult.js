import React from "react";

function CaptionResult({ caption }) {
  if (!caption) return null;

  return (
    <div className="caption-container">
      <p className="caption-text">{caption}</p>
    </div>
  );
}

export default CaptionResult;
