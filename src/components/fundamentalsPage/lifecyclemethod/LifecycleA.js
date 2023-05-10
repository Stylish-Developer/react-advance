//-- lifecycle A component

import { Component } from "react";
import LifeCycleB from "./LifecycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Lifecycle A",
    };
    console.log("lifecycle A constructor");
  }


  handleChange = () => {
    this.setState({
        msg: 'Lifecycle A to B'
    })
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecycle A getDerivedStateFromProps");
    return null; //it returns object or null value
  }

  componentDidMount() {
    console.log("lifecycle A componentDidMount");
  }

  shouldComponentUpdate(){
    console.log("lifecycle A shouldComponentUpdate ");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("lifecycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log("lifecycle A componentDidUpdate");
  }
  render() {
    console.log("lifecycle A render method");
    return (
      <>
        <h2>{this.state.msg}</h2>
        <button onClick={this.handleChange}>change state</button>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
