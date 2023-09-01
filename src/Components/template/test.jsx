import React from "react";

function test() {
  {
    showMoreSkill && (
      <div className="more-skill skill">
        {skillList.map((skillData, index) => (
          <div className="skill-container">
            <div key={index} className="skill-left-option">
              <input
                placeholder="Enter Skill"
                id="new_skill"
                onChange={(e) => skillChange(e, index)}
                value={skillData.skill}
              />
              <select id="skill_level" onChange={(e) => skillChange(e, index)}>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
                <option value="5">Level 5</option>
              </select>
            </div>

            <div className="skill-remover">
              {skillList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
            <div className="skill-button">
              <button
                className="add"
                onClick={() => {
                  const newSkill = document.getElementById("new_skill").value;
                  const skillLevel =
                    document.getElementById("skill_level").value;
                  addSkill(selectedSkills, newSkill, skillLevel);
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <div></div>;
}

export default test;
