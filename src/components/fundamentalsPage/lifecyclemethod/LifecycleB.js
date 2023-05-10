//-- lifecycle B component

import { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Lifecycle B",
    };
    console.log("lifecycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycle B getDerivedStateFromProps");
    return null; //it returns object or null value
  }

  componentDidMount() {
    console.log("lifecycle B componentDidMount");
  }
  shouldComponentUpdate(){
    console.log("lifecycle B shouldComponentUpdate ");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("lifecycle B getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log("lifecycle B componentDidUpdate");
  }
  render() {
    console.log("lifecycle B render method");
    return (
      <>
        <h2>{this.state.msg}</h2>
      </>
    );
  }
}

export default LifeCycleB;
