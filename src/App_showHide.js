import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="m-5">
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText = "collapse Text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "green",
  expanded = false,
  className,
  children,
}) {
  const buttonStyle = {
    color: buttonColor,
  };
  const [isExpended, setIsExpended] = useState(expanded);
  // at first, split by space (" ") then count using slice method and then it will return an array which we need to separate by space(" "), at last add three dots(.).
  const displayText = isExpended ? children : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  return (
    <div className={`mb-5 ${className}`}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpended((exp) => !exp)} style={buttonStyle}>
        {isExpended ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
