//We haven't started the hooks concept yet.so that i go with class component
import { Component } from "react";

// -- basic form concept component
class BasicFormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comments: "",
      technologies: "",
      isCondition: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isCondition: true,
    });
  };

  render() {
    return (
      <>
        <h4>basic form handling concept</h4>
        {this.state.isCondition && (
          <h2>
            Welcome "<span style={{ color: "green" }}>{this.state.name}</span>"
            your comment "
            <span style={{ color: "green" }}>{this.state.comments}</span>" is
            submitted successfully and you choose "
            <span style={{ color: "green" }}>{this.state.technologies}</span>"
            technology`
          </h2>
        )}
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            minHeight: "300px",
            maxWidth: "300px",
            margin: "auto",
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                flexDirection: "column",
              }}
            >
              &nbsp;
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              &nbsp;
              <label htmlFor="comments">Comments</label>
              <textarea
                id="comments"
                name="comments"
                value={this.state.comments}
                onChange={this.handleChange}
              />
              <label htmlFor="technologies">Technologies</label>
              &nbsp;
              <select
                id="technologies"
                name="technologies"
                value={this.state.technologies}
                onChange={this.handleChange}
              >
                <option value="">
                  -- select anyone option--
                </option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
              </select>
              &nbsp;
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default BasicFormHandling;
