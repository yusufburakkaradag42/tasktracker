import React from "react";

const Button = ({ show, setShow }) => {
  console.log(show);
  return (
    <div>
      <button
        type="submit"
        className="text-center m-auto p-1 rounded-1 d-flex border border-none text-light "
        onClick={() => setShow(!show)}
      >
        Show and task Bar
      </button>
    </div>
  );
};

export default Button;