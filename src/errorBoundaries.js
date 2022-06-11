import { Component } from "react";
import { Link } from "react-router-dom";

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
      return (
        <div>
          <h2>Oops something is wrong!</h2>
          <h3>
            You will automatically redirected to the homepage in 5 seconds,
            <Link to="/"> Click here</Link> to go to homepage now.
          </h3>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaries;
