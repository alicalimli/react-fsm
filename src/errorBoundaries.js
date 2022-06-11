import { Component } from "react";

class ErrorBoundaries extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate() {
    console.log("updated");
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops something is wrong!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundaries;
