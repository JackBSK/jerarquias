import React from "react";

export default function IconNav(props) {
  return (
    <div className="icon">
      <img src={props.iconUrl} alt="icon" />
    </div>
  );
}