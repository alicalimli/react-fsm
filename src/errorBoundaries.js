import { Component } from "react";

class ErrorBoundaries extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
}

export default ErrorBoundaries;
