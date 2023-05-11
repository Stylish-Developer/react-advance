// Refs with class component
// with this example we can access the child component dom element from the parent component

import { Component, createRef } from "react";
import ChildCls from "./ChildCls";

class parentCls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
    };
    this.inputRef = createRef();
  }

  handleFocus = () => {
    this.inputRef.current.handleFocus();
  };

  render() {
    return (
      <>
        <div
          style={{
            height: "140px",
            width: "100%",
            padding: "10px",
            backgroundColor: "lightgreen",
            border: "1px solid green",
          }}
        >
          <h4>refs with class component example - parent Component</h4>
          <button type="button" onClick={this.handleFocus}>
            focus
          </button>
          <ChildCls ref={this.inputRef} />
        </div>
      </>
    );
  }
}

export default parentCls;
