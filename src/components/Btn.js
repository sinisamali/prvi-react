import React from 'react';


const Btn = (props) => {
  return (
    <div
      className="btn btn-primary"
      onClick={props.handleClick}
    >{props.title}</div>
  );
}

export default Btn;
