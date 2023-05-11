// -- PropsPure component

import { PureComponent } from "react";
import StatePure from "./StatePure";

class PropsPure extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "REACTJS",
    };
  }

  render() {
    const { name } = this.props;
    console.log("props pure component");
    return (
      <>
        <h4>pure component concepts with State</h4>
        <h2>you want to check the result kindly go to the console</h2>
        <p>
          name comes from parent component and the name is&nbsp;
          <span
            style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}
          >
            {name}
          </span>
        </p>
        <StatePure />
      </>
    );
  }
}

export default PropsPure;
