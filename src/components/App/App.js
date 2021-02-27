import React from "react";
import "./App.css";
import animals from "./App.data";
import AnimalCard from "../AnimalCard/AnimalCard";

function App() {
  return (
    <div className="wrapper">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.name}
          diet={animal.diet}
          name={animal.name}
          size={animal.size}
          scientificName={animal.scientificName}
        />
      ))}
    </div>
  );
}

export default App;
