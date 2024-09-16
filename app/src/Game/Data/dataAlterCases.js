export const casesAlter = [
  { key: 0, name: "houseYellow", id: "case_houseYellow", position: "relative", top: "1.5%", left: "1.5%" },
  { key: 1, name: "houseRed", id: "case_houseRed", position: "relative", top: "33.7%", left: "66.2%" },
  { key: 2, name: "houseBlue", id: "houseBlue", position: "relative", bottom: "63.3%", left: "66.2%" },
  { key: 3, name: "houseGreen", id: "houseGreen", position: "relative", bottom: "31.2%", left: "1.5%" },
];

// Générer les 68 nouvelles entrées
const newEntries = Array.from({ length: 68 }, (_, index) => {
  const key = index + 4; // Commence la clé à partir de 4
  const name = (index + 1).toString(); // Nom en commençant à "1"
  return {
    key: key,
    name: name,
    id: `case_${name}`,
    position: "relative", // Ajoute position: relative
     };
});

const YellowHouseEntries = Array.from({ length: 8 }, (_, index) => {
  const key = index + 72; // Commence la clé à partir de 72
  const name = (index + 1).toString(); // Nom en commençant à "1"
  return {
    key: key,
    name: `yellow_${name}`,
    id: `yellow_${name}`,
    position: "relative", // Ajoute position: relative
  };
});

const RedHouseEntries = Array.from({ length: 8 }, (_, index) => {
  const key = index + 80; // Commence la clé à partir de 72
  const name = (index + 1).toString(); // Nom en commençant à "1"
  return {
    key: key,
    name: `red_${name}`,
    id: `red_${name}`,
    position: "relative", // Ajoute position: relative
  };
});

casesAlter.push(...newEntries,...YellowHouseEntries,...RedHouseEntries);
