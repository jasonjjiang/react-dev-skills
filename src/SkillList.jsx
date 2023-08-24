import React from "react";
import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
    const skillListItems = skills.map((skill, idx) => <SkillListItem skill={skill} key={idx} index={idx}/>);

    return (
        <ul className="SkillList">
            {skillListItems}
        </ul>
    );
}
