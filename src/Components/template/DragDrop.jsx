import React, { useState, Component } from "react";
import "./template.style.css";

import {
  SortableContainer,
  SortableElement,
} from "react-sortable-hoc";
import {arrayMoveImmutable} from 'array-move';

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

class DragDrop extends Component {
  constructor(props) {
    super(props);

    this.sortEnd = ({ oldIndex, newIndex }) => {
      this.setState({
        items: arrayMoveImmutable(this.state.items, oldIndex, newIndex),
      });
    };

    this.state = {
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    };

  }

  render() {
    return (
        <SortableList items={this.state.items} onSortEnd={this.sortEnd} />
    );
  }
}

export default DragDrop;
