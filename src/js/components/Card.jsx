import React from "react";

// const cardBoxes = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// };

const Card = ({ cardFour }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={cardFour.src} class="card-img-top" alt="..." />
        <div className="align-items-center m-2">
          <h5 className="card-title">{cardFour.title}</h5>
          <p className="card-text">{cardFour.paragraph}</p>
          <a href="https://www.google.com" className="btn btn-primary">
            Join Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
