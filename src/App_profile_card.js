import React from "react";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="container">
      <div className="profile-card">
        <Image />
        <div class="card-body">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="card-image">
      <img src="image.avif" alt="profile-image"></img>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>John Snow</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et
        tenetur cumque modi atque cupiditate. Nulla possimus nihil consequuntur
        error asperiores consectetur blanditiis recusandae, obcaecati minus,
        perferendis aperiam deserunt accusamus?
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skillList">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} bg={skill.color} />
      ))}
      {/*  */}
    </div>
  );
}

function Skill({ skill, level, bg }) {
  return (
    <div className="skill" style={{ backgroundColor: bg }}>
      <span>{skill} </span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "🔰"}
      </span>
    </div>
  );
}
