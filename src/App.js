import React, { useState } from "react";
import InputForm from "./components/inputForm";
import CaptionResult from "./components/CaptionResult";
import "./App.css"; // ✅ Import your CSS file

function App() {
  const [caption, setCaption] = useState("");

  const handleGenerate = (topic) => {
    const templates = {
      health: [
        "Health is wealth! 💪",
        "Staying strong and healthy.",
        "Daily dose of wellness.",
        "Fueling my body, mind & soul. 🧘"
      ],
      travel: [
        "Wanderlust calling! 🌍✈️",
        "Next stop: adventure.",
        "Travel far, travel wide.",
        "Living for new places & new faces."
      ],
      food: [
        "Good food, good mood. 🍔",
        "Eating my way through life.",
        "Foodie for life.",
        "Taste the best, forget the rest."
      ]
    };

    const genericTemplates = [
      "Loving all things ${topic}! ✨",
      "Can't get enough of ${topic}.",
      "Making memories with ${topic}.",
      "Another day, another ${topic} story."
    ];

    const key = topic.toLowerCase();
    const topicTemplates = templates[key] || genericTemplates;

    const randomIndex = Math.floor(Math.random() * topicTemplates.length);
    let generatedCaption = topicTemplates[randomIndex];

    if (!templates[key]) {
      generatedCaption = generatedCaption.replace("${topic}", topic);
    }

    setCaption(generatedCaption);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Instagram Caption Generator</h1>
      <InputForm onGenerate={handleGenerate} />
      <CaptionResult caption={caption} />
    </div>
  );
}

export default App;
