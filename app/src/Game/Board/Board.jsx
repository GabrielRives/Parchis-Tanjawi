// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import PropTypes from "prop-types"; // Importation de PropTypes
import { MapInteractionCSS } from "react-map-interaction";
import BoardLayout from "./BoardLayougrid";
import "./Board.scss";


class Controlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        scale: 0.735,
        translation: { x: 0, y: 0 },
      },
    };
  }

  handleRecenter = () => {
    // Remet la translation à (0,0) et le scale à 1
    this.setState({
      value: {
        scale: 0.735,
        translation: { x: 0, y: 0 },
      },
    });
  };

  render() {
    return (
      <div className="Board">
       
          <MapInteractionCSS
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
            minScale={0.735} // Limite de dézoom à 0.735
            maxScale={this.props.maxScale}
          >
            <BoardLayout className="importedBoard" />
          </MapInteractionCSS>
          <button onClick={this.handleRecenter} style={{ position: "absolute", top: 10, right: 10 }}>
            Recenter
          </button>
           </div>
    );
  }
}

// Définition des PropTypes pour ce composant
Controlled.propTypes = {
  minScale: PropTypes.number,
  maxScale: PropTypes.number,
  translationBounds: PropTypes.shape({
    xMin: PropTypes.number,
    xMax: PropTypes.number,
    yMin: PropTypes.number,
    yMax: PropTypes.number,
  }),
};

// Valeurs par défaut des props si elles ne sont pas fournies
Controlled.defaultProps = {
  minScale: 0.735, // Limite minimale de dézoom
  maxScale: 3, // Zoom maximum facultatif
};

export default Controlled;
