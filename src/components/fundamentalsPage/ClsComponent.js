import { Component } from "react";

// -- here component class in extends from the react library.
class ClsComponent extends Component {
  constructor() {
    super();
    this.info = "This is a class component paragraph text.";
  }
  render() {
    return (
      <>
        <p>{this.info}</p>
      </>
    );
  }
}

export default ClsComponent;
