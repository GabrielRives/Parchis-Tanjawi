// eslint-disable-next-line no-unused-vars
import React, { useEffect , useState} from "react";
import "./Boardreworked.scss";
import { casesAlter } from "../Data/dataAlterCases";


function BoardReworked() {
     
  useEffect(() => {
    // Ajouter la classe verticalCase pour les IDs de 1 à 8, 26 à 42 et 60 à 68
    for (let i = 1; i <= 8; i++) {
      const element = document.getElementById(`case_${i}`);
      if (element) element.classList.add("verticalCase");
    }
    for (let i = 26; i <= 42; i++) {
      const element = document.getElementById(`case_${i}`);
      if (element) element.classList.add("verticalCase");
    }
    for (let i = 60; i <= 68; i++) {
      const element = document.getElementById(`case_${i}`);
      if (element) element.classList.add("verticalCase");
    }

    // Ajouter la classe horizontalCase pour les IDs de 9 à 25 et 43 à 59
    for (let i = 9; i <= 25; i++) {
      const element = document.getElementById(`case_${i}`);
      if (element) element.classList.add("horizontalCase");
    }
    for (let i = 43; i <= 59; i++) {
      const element = document.getElementById(`case_${i}`);
      if (element) element.classList.add("horizontalCase");
    }

    for (let i = 1; i <= 9; i++) {
      const element = document.getElementById(`yellow_${i}`);
      if (element) element.classList.add("horizontalCase");
    }

        for (let i = 1; i <= 9; i++) {
          const element = document.getElementById(`red_${i}`);
          if (element) element.classList.add("horizontalCase");
        }
  }, []); // Le tableau vide [] signifie que l'effet est exécuté une seule fois au montage

  console.log(casesAlter);

  return (
    <div className="alterBoard">
      {/* Générer les divs des houses */}
      {casesAlter.map((item) => (
        <div
          key={item.key}
          id={item.id}
          className={item.name}
          style={{
            position: item.position,
            bottom: item.bottom,
            top: item.top,
            left: item.left,
          }}
        >
          {/* Contenu dynamique des houses */}
          {item.name.replace("_", " ")}
        </div>
      ))}

      {/* Générer les 68 cases à l'extérieur des houses */}
      <div className="casesContainer">
        {[...Array(79).keys()].map((i) => (
          <div key={i + 1} id={`case_${i + 1} yellow_${i + 1}`} className="case">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoardReworked;
