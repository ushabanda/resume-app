import React, { Component, useContext } from "react";
import "./template.style.css";
import { Usercontext } from "./myContext";

import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

import EditIcon from "@mui/icons-material/Edit";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

function addMore() {
  console.log(345);
}

function addSkill(skill) {
  const dragObj = new DragDrop();

  let new_skill = document.getElementById("new_skill").value;
  let skill_level = document.getElementById("skill_level").value;
  console.log(
    new_skill,
    skill_level,
    dragObj.props.displaySkills(),
    skill.concat({ skill_type: new_skill, level: Number(skill_level) })
  );
}

let addEducation = () => {
  let new_education = document.getElementById("new_education").value;
  let education_level = document.getElementById("education_level").value;
  console.log(new_education, education_level);
};

const SortableItem = SortableElement(({ value }) => (
  <div>
    <div className="drag-content">
      <div className="drag-icon-container">
        <DragIndicatorIcon />
      </div>
      <h3>{value["label"]}</h3>
      <EditIcon />
    </div>

    <div className="drag-para">
      <p>{value["description"]}</p>
    </div>

    {value["label"] == "skill" ? (
      <div>
        <div className="skill-list">
          <ul>
            {value["data"].map((skill) => (
              <li>
                <button>{skill["skill_type"]}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="more-skill">
          <input placeholder="Enter Skill" id="new_skill" />
          <select id="skill_level">
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
            <option value="4">Level 4</option>
            <option value="5">Level 5</option>
          </select>
          <button className="add" onClick={() => addSkill(value["data"])}>
            Add
          </button>
        </div>
      </div>
    ) : (
      <div>
        <div className="education-list">
          <ul>
            {value["data"].map((edu) => (
              <li>
                <button>{edu["edu_type"]}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="more-education">
          <input placeholder="Enter education" id="new_education" />
          <select id="education_level">
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
            <option value="4">Level 4</option>
            <option value="5">Level 5</option>
          </select>
          <button className="add" onClick={addEducation}>
            Add
          </button>
        </div>
      </div>
    )}

    <button className="add-extra" onClick={addMore}>
      + Add {value["label"]}
    </button>
  </div>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      <br></br>
      <ul className="drag-body">
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </ul>
      <br></br>
    </div>
  );
});

class DragDrop extends Component {
  constructor(props) {
    super(props);
    const { displaySkills } = props;

    this.sortEnd = ({ oldIndex, newIndex }) => {
      this.setState({
        items: arrayMoveImmutable(this.state.items, oldIndex, newIndex),
      });
      //   this.handleSkillSelect = this.handleSkillSelect.bind(this);
    };

    this.state = {
      items: [
        {
          label: "education",
          data: [
            { edu_type: "Bachelores", CGPA: 78 },
            { edu_type: "Masters", CGPA: 68 },
          ],
          description:
            "A varied education on your resume sums up the value that your learnings and background will bring to job",
        },

        {
          label: "skill",
          data: [
            { skill_type: "React", level: 5 },
            { skill_type: "Python", level: 3 },
            { skill_type: "Java", level: 1 },
          ],
          description:
            "Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system).",
        },
      ],
      //   selectedSkills: [],
    };
  }

  handleSelectSkill = (selectedSkill) => {
    this.setState((prevState) => ({
      selectedSkills: [...prevState.selectedSkills, selectedSkill],
    }));
    this.props.onSelectSkill(selectedSkill);
  };

  render() {
    const { selectedSkills } = this.state;
    return (
      <SortableList
        items={this.state.items}
        onSortEnd={this.sortEnd}
        onSelectSkill={this.handleSelectSkill}
      />
    );
  }
}

export default DragDrop;
