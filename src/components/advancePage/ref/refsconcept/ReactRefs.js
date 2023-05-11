// -- this is perfect explanation and example for React-Refs feature
import { Component, createRef } from "react";

class ReactRefs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
    this.ref = createRef();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // alert(`your emailId "${this.state.email}" submitted successfully 👍`);
    alert(
      `your emailId "${this.ref.current.value}" submitted successfully from dom value👍`
    );
    this.setState({
      email: "",
    });
  };

  //--------------------------------------------------------------------------
  componentDidMount() {
    console.log(this.ref);
    this.ref.current.focus();
  }
  //--------------------------------------------------------------------------

  render() {
    const innerDivStyle = {
      height: "100px",
      width: "40%",
      border: "1px solid #CCC",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "5px",
    };
    return (
      <>
        <h4>Refs concept</h4>
        <p>
          key points - with React Refs we can directly control the dom element
          with in react and also we can access the dom node element value
          directly
        </p>
        <p>There are 3 simple steps we can achieve this</p>
        <div style={innerDivStyle}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Enter your EmailId:</label>&nbsp;
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              ref={this.ref}
            />
            &nbsp;
            <button type="submit">submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default ReactRefs;
