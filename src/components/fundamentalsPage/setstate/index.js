// -- setState concept component

import { Component } from "react";

class SetState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: 0,
    };
  }

  handleChangeColor = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 255),
    });
  };

  render() {
    const styles = {
      backgroundColor: `rgb(255, 0, ${this.state.randomNumber})`, // set RGB values here
      minHeight: "100px",
      width: "100%",
    };

    return (
      <>
        <p>SetState concept</p>
        <div style={styles}></div>
        <h3>
          Random Number: {this.state.randomNumber} so the rgb value is
          rgb(255,0,{this.state.randomNumber})
        </h3>
        <button onClick={this.handleChangeColor}>change color by click</button>
      </>
    );
  }
}

export default SetState;
