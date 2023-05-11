// -- State Pure component

import { PureComponent } from "react";

class StatePure extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "REACTJS",
    };
  }

  componentDidMount(){
    setInterval( () => {
      this.setState({
        name: "REACTJS"
      });
    },2000 );
  }


  render() {
    const { name } = this.state;
    console.log("state pure component");
    return (
      <>
        <h4>pure component concepts with Props</h4>
        <p>
          name comes from parent component and the name is&nbsp;
          <span
            style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}
          >
            {name}
          </span>
        </p>
      </>
    );
  }
}

export default StatePure;
