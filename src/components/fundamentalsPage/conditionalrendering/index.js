// -- conditional rendering concept component

import { Component } from "react";

// conditional rendering concepts has 4 types
// if/else
// element variable
// ternary operator
// short circuit operator

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isState: true,
    };
  }
  render() {
    // if (this.state.isState) {
    //   return (
    //     <>
    //       <h4>ConditionalRendering concept with if/else</h4>
    //     </>
    //   );
    // } else {
    //   return (
    //     <>
    //       <h4>ConditionalRendering concept</h4>
    //     </>
    //   );
    // }
    //----------------------------------------------------------------------------------------------------------
    //     let message;
    //     if (this.state.isState) {
    //       message = (
    //         <h4>ConditionalRendering concept with element variable</h4>
    //       );
    //     } else {
    //       message = <h4>ConditionalRendering concept</h4>;
    //     }

    //     return(
    //         <>
    //         {message}
    //         </>
    //     )
    //   }
    //----------------------------------------------------------------------------------------------------------
    //     return (
    //       <>
    //         {this.state.isState ? (
    //           <h4>ConditionalRendering concept with ternary operator</h4>
    //         ) : (
    //           <h4>ConditionalRendering concept</h4>
    //         )}
    //       </>
    //     );
    //   }
    //---------------------------------------------------------------------------------------------------------------

    return (
      <>
        {this.state.isState && (
          <h4>ConditionalRendering concept with short circuit operator</h4>
        )}
        {!this.state.isState && <h4>ConditionalRendering concept</h4>}
      </>
    );
  }
}

export default ConditionalRendering;
