import React from 'react';


const Btn = (props) => {
  return (
    <div
      className="btn"
      onClick={props.handleClick}
    >{props.title}</div>
  );
}

export default Btn;
