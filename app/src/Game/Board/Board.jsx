// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import PropTypes from "prop-types"; // Importation de PropTypes
import { MapInteractionCSS } from "react-map-interaction";

import BoardReworked from "./Boardreworked";
import "./Board.scss";
import Gameplay from "../TestGameplay.jsx";

class Controlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        scale: 0.735,
        translation: { x: 0, y: 0 },
      },
      initialScale: 0.735, // Pour garder la valeur initiale du zoom
    };
  }

  handleRecenter = () => {
    // Remet la translation à (0,0) et le scale à 0.735
    this.setState({
      value: {
        scale: 0.735,
        translation: { x: 0, y: 0 },
      },
    });
  };

  handlePanZoomChange = (value) => {
    const { scale, translation } = value;

    // Si le zoom est à la valeur initiale, limiter le pan à 200px
    if (scale === this.state.initialScale) {
      const limitedTranslation = {
        x: Math.max(-200, Math.min(200, translation.x)), // Limiter entre -200 et 200px en X
        y: Math.max(-200, Math.min(200, translation.y)), // Limiter entre -200 et 200px en Y
      };

      // Mettre à jour l'état avec la translation limitée
      this.setState({
        value: {
          scale: scale,
          translation: limitedTranslation,
        },
      });
    } else {
      // Sinon, autoriser le pan libre sans restriction
      this.setState({
        value: value,
      });
    }
  };

  
  render() {
    return (
      <div className="visualPage">
        <div className="Board">
          <MapInteractionCSS
            value={this.state.value}
            onChange={this.handlePanZoomChange}
            minScale={0.735} // Limite de dézoom à 0.735
            maxScale={this.props.maxScale}
          >
            <BoardReworked />
          </MapInteractionCSS>
        </div>
        <div className="controlSection">
          <button onClick={this.handleRecenter}>Recenter</button>
          <Gameplay  />
        </div>
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
