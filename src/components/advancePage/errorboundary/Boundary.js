// -- create a error boundary here

import React, { Component } from "react";

class EBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { error: true };
  }

  render() {
    const { children } = this.props;
    if (this.state.error) {
      return <h1>Something went wrong.</h1>;
    }

    return <>{children}</>;
  }
  //   const [error, setError] = useState(false);

  //   useEffect(() => {
  //     function handleError() {
  //       setError(true);
  //     }

  //     window.addEventListener('error', handleError);
  //     return () => window.removeEventListener('error', handleError);
  //   }, []);
}

export default EBoundary;
