import React from "react";
import "./SkillListItem.css"

export default function SkillListItem({ skill, index }) {
  const skillName = skill.name;
  const skillLevel = skill.level;

  return (
    <li className="SkillListItem">
        {skillName} 
        <div className="level">LEVEL {skillLevel}</div>
    </li>
  );
}
