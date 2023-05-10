// -- component lifecycle method
import { Component } from "react";
import LifeCycleA from "./LifecycleA";

// In lifecycle method there are 4 phases
// mounting - when an instance of a component is being created and inserted into the dom called mounting = componentDidMount
// updating - when a component is being re-rendered as a results of changes to either props and state called updating = componentDidUpdate
// unmounting - when a component is being removed from dom is called unmounting = componentWillUnmount
// error handling - when there is an error during the rendering in a lifecycle method or in the constructor of any child component called error handling = componentDidCatch

// mounting has 4 phases
// updating has 5 phases
// unmounting has 1 phase  => we will see in the future concept
// error handling 2 phases => "" "" "" "" "" "" ""

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
    };
  }

  render() {
    return (
      <>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Lifecycle method concepts</h4>
          <p>
            to see the result to the order of execution go to console in the
            browser
          </p>
          <LifeCycleA />
        </div>
      </>
    );
  }
}

export default LifeCycle;
