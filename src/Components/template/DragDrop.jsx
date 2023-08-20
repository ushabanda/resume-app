import React, { Component } from "react";
import "./template.style.css";

import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

import EditIcon from "@mui/icons-material/Edit";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

var skills = [{"skill_type": "React", "level": 5},{"skill_type": "Python", "level": 3},{"skill_type": "Java", "level": 1}]

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


const SortableItem = SortableElement(({ value}) => 
	<div>
	  <div className="drag-content">
		<div className="drag-icon-container">
		  <DragIndicatorIcon />
		</div>
		<h3>{value['label']}</h3>
		<EditIcon />
	  </div>

	  <div className="drag-para">
		<p>
		  {value['description']}
		</p>
	  </div>
	  
	  {value['label'] == 'skill' ? (
	  <div className="skill-list">
		<ul>
		  {value['data'].map(skill => (
			<li><button>{skill['skill_type']}</button> </li>
		  ))}
		</ul>  
	  </div>
	  ):(
	  <div className="education-list">
		<ul>
		  {value['data'].map(edu => (
			<li><button>{edu['edu_type']}</button></li>
		  ))}
		</ul>  
	  </div>
	  )}
	  
	  <div className="add-extra">
		<p>+ Add {value['label']}</p>
	  </div>
	</div>
);

class DragDrop extends Component {
  constructor(props) {
    super(props);

    this.sortEnd = ({ oldIndex, newIndex }) => {
      this.setState({
        items: arrayMoveImmutable(this.state.items, oldIndex, newIndex),
      });
	//   this.handleSkillSelect = this.handleSkillSelect.bind(this);
	  
    };

    this.state = {
      items: [
		  {"label":"education", 
		    "data": [{"edu_type": "Bachelores", "CGPA": 78},{"edu_type": "Masters", "CGPA": 68}],
			"description": "A varied education on your resume sums up the value that your learnings and background will bring to job"}, 
		  
		  {"label":"skill", 
		  "data": [{"skill_type": "React", "level": 5},{"skill_type": "Python", "level": 3},{"skill_type": "Java", "level": 1}],
		  "description": "Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system)."}],
		//   selectedSkills: [],
		};
	
	this.skills = [{"skill_type": "React", "level": 5},
	{"skill_type": "Python", "level": 3},
	{"skill_type": "Java", "level": 1}]
	 
  }

  handleSelectSkill = (selectedSkill) => {
    this.setState((prevState) => ({
      selectedSkills: [...prevState.selectedSkills, selectedSkill],
    }));
	this.props.onSelectSkill(selectedSkill);
  };

  render()
   {
	const { selectedSkills } = this.state;
    return <SortableList items={this.state.items} onSortEnd={this.sortEnd} onSelectSkill={this.handleSelectSkill} />;
  }
}

export default DragDrop;
