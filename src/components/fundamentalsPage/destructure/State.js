// -- props destructing

import { Component } from "react";

class ClsPropsDestructuring extends Component {
  render() {
    const { name, welcomeMsg, today } = this.props;
    return (
      <>
        <h3>props destructuring in class component</h3>
        <h2>{name}</h2>
        <p>{welcomeMsg}</p>
        <h2>Today : {today}</h2>
      </>
    );
  }
}

export default ClsPropsDestructuring;
