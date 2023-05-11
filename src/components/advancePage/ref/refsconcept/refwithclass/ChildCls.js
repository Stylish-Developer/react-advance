// Refs with class component
// with this example we can access the child component dom element from the parent component

import { Component, createRef } from "react";

class ChildCls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    this.ref = createRef();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFocus = () => {
    this.ref.current.focus();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${this.state.name}`);
    this.setState({
      name: "",
    });
  };
  render() {
    return (
      <>
        <div
          style={{
            height: "70px",
            width: "100%",
            padding: "10px",
            backgroundColor: "lightpink",
            border: "1px solid pink",
          }}
        >
          <h4>refs with class component example - child Component</h4>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              ref={this.ref}
            />

            <button type="submit">submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default ChildCls;
