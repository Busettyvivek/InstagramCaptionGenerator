import React, { useState } from "react";

function InputForm({ onGenerate }) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim() !== "") {
      onGenerate(topic);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Enter a topic (e.g., travel, health)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="input-box"
      />
      <button type="submit" className="generate-button">
        Generate
      </button>
    </form>
  );
}

export default InputForm;
