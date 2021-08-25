import React from "react";
import "./Input.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <lable htmlFor={props.input.id}>{props.lable}</lable>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
