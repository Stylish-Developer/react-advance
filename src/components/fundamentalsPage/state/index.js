import { Component } from "react";

// -- state concept component
class StateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeMsg: "Welcome Guest 🙏",
    };
  }

  handleClick() {
    this.setState({
      welcomeMsg: "Thank you for visiting 😇",
    });
  }

  render() {
    return (
      <>
        <p>State concept</p>
        <h3>State value - {this.state.welcomeMsg}</h3>
        <button onClick={() => this.handleClick()}>Visit</button>
      </>
    );
  }
}

export default StateComponent;
