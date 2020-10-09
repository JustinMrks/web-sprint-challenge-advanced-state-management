import React from "react";

const SmurfCard = ({ smurf }) => {
  return (
    <div>
      <h1>Name: {smurf.name}</h1>
      <h3>{smurf.age} years old</h3>
      <h3>{smurf.height} tall</h3>
    </div>
  );
};

export default SmurfCard;
