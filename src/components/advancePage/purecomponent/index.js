// --> pure component  concept component
import { Component } from "react";
import PropsPure from "./PropsPure";
import Memo from "../memo";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "GOWTHAM SAMPATHKUMAR",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "GOWTHAM SAMPATHKUMAR",
      });
    }, 2000);
  }
  render() {
    const styles = {
      width: "100%",
      height: "100%",
      padding: "5px",
    };

    console.log("........Parent component........");

    return (
      <>
        <div style={styles}>
          <h3>pure component</h3>
          <p>
            Short Explanation: it is used for avoid unnecessary component
            re-render when there is no change from previous state and previous
            props.
          </p>
          <p>it is very helpful for performance boost.</p>
          <br />
          <PropsPure name={this.state.name} />
          <Memo name={this.state.name} />
        </div>
      </>
    );
  }
}

export default ParentComponent;
