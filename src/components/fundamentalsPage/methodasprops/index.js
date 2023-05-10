// --> method as props concept

import { Component } from "react";
import Child from "./child";

class MethodAsProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  handleCountIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 2,
    }));
  };

  handleReceiveParamsFromChild = (value) => {
    alert(`WELCOME ${value}`);
  };

  render() {
    return (
      <>
        <h3>Method as Props concept</h3>
        <h1>
          count - <span style={{ color: "lawngreen" }}>{this.state.count}</span>
        </h1>
        <Child
          handleCountIncrement={this.handleCountIncrement}
          handleReceiveParamsFromChild={this.handleReceiveParamsFromChild}
        />
      </>
    );
  }
}

export default MethodAsProps;
