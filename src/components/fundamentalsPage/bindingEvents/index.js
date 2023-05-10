// -- in functional component we don't need to bind any events because Absence of "this" keyword in functional component
import { Component } from "react";

// -- binding events there are 4 types:
// constructor level bind
// inline bind
// inline call back function with arrow key
// function definition with arrow function

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Hello 👋",
    };

    // this.handleClick = this.handleClick.bind(this); // 1 constructor level bind
  }

  //   handleClick() {
  //     this.setState({
  //       msg: "Good Bye 🙋‍♂️",  [remove this comment => this is for method  1, 2, 3]
  //     });
  //   }

  handleClick = () => {
    this.setState({
      msg: "Good Bye 🙋‍♂️", // this is for method 4
    });
  };

  render() {
    return (
      <>
        <p>Event Binding concept</p>
        <h1>{this.state.msg}</h1>
        {/* <button onClick={this.handleClick}>click to say GoodBye 👆</button>  [remove this comment => this  is for method 1 ]*/}
        {/* <button onClick={this.handleClick.bind(this)}>click to say GoodBye 👆</button> [remove this comment => this is for method 2] */}
        {/* <button onClick={() => this.handleClick()}>
          click to say GoodBye 👆  [remove this comment => this is for method 3]
        </button> */}
        <button onClick={this.handleClick}>click to say GoodBye 👆</button>
      </>
    );
  }
}

export default EventBinding;
