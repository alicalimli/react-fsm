import { Component } from "react";

class ErrorBoundaries extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops something is wrong!</h1>;
    }
  }
}

export default ErrorBoundaries;
