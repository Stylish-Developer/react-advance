// parent ref component for forward ref component

import { Component, createRef } from "react";
import CRef from "./Cref";

class PRef extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
    };

    this.ref = createRef();
  }

  handleFocus = () => {
    this.ref.current.focus();
  };
  render() {
    return (
      <>
        <h4>PRef</h4>
        <CRef ref={this.ref} />
        <button type="button" onClick={this.handleFocus}>
          click to focus child component input field
        </button>
      </>
    );
  }
}

export default PRef;
