import { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundaries from "./errorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      );
    }

    console.log(this.props);
    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div className="pet-details">
          <div className="name-location-container">
            <h1>{name}</h1>
            <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          </div>
          <p>{description}</p>
          <button
            onClick={this.toggleModal}
            style={{ backgroundColor: this.props.theme }}
          >
            Adopt {name}
          </button>
        </div>
        {this.state.showModal ? (
          <Modal>
            <div>
              <h1>Are you sure</h1>
              <div className="buttons">
                <a href="https://google.com">Yes</a>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext);
  return (
    <ErrorBoundaries>
      <Details params={params} theme={theme} />;
    </ErrorBoundaries>
  );
};

export default WrappedDetails;
