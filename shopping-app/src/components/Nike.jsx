import React from "react";

const Nike = (props) => {
  console.log(props);
  const { imgUrl, title, content, price } = props.nike;

  return (
    <div className="col-md-4">
      <img src={imgUrl} alt={title} width="80%" />
      <h5>{title}</h5>
      <span>{content}</span>
      <p>{price}</p>
    </div>
  );
};

export default Nike;
