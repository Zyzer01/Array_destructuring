// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import { cars } from "./practice.js";
import { animals } from "./data.js";

const [honda, tesla] = cars;

const [hondaTopColour] = honda.coloursByPopularity;
const { topSpeed: hondaTopSpeed } = honda.speedStats;

const [teslaTopColour] = tesla.coloursByPopularity;
const { topSpeed: teslaTopSpeed } = tesla.speedStats;
// console.log(honda.coloursByPopularity);

const [cat, dog] = animals;

//If name and sound is undefined from the source, use this
// const { name = "Fluffy", sound = "Purrr" } = cat;

const { name, sound, feedingRequirement } = cat;

const { name: dogName, sound: dogSound } = dog;

const { food, water } = feedingRequirement;

console.log(food);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
