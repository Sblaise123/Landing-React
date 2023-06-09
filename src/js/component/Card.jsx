import React from "react";
const Card = () => {
 return (
   <div className="card" style={{ width: "18rem" }}>
    <img
     src="https://picsum.photos/id/2/200/300"
     className="card-img-top"
     alt=""
    />
    <div className="card-body justify-content-end">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up bulk of the card's content.
      </p>
      <div className="text-center">
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
      </div> 
   </div>
 );
   
};


export default Card;