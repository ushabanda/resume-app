import React, { Component } from "react";
import "./template.style.css";

import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

import EditIcon from "@mui/icons-material/Edit";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

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


const SortableItem = SortableElement(({ value }) => 
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
    };

    this.state = {
      items: [{"label":"education", "description": "A varied education on your resume sums up the value that your learnings and background will bring to job"}, 
		  {"label":"skill", "description": "Choose 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system)."}],
    };
  }

  render() {
    return <SortableList items={this.state.items} onSortEnd={this.sortEnd} />;
  }
}

export default DragDrop;
