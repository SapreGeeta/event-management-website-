import React from "react";


const ReviewCard = ({ name, message,image}) => {
  return (
    <div className="items3">
     <p className="para5"><b>{name}</b></p>

      <img src="./rating.jpg" className='Star-img'>{image}</img>
      <p className="para5">{message}</p>
      
    </div>
  );
};

export default ReviewCard;