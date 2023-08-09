import React from "react";
import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size, color, ...rest }) => {
  return (
    <>
      {/* <button className={["Button", size, color].join(" ")}>{children}</button> */}
      <button className={classNames("Button", size, color)} {...rest}>
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
