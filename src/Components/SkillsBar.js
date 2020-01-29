import React from "react";

const Content = ({ name, level }) => (
  <div>
    <h3>{name}</h3>
    {level}
    <img src="../images/starfill.png" alt="" />
    <img src="../images/star.png" alt="" />
  </div>
);

export default Content;
