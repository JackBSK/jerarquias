import React from "react";
import Icon from "./icon";

export function Sidebar(props) {
  return <div className="sidebar">
    {props.icons.map(i => <Icon iconUrl={i.icon} title={i.title}/>)}
  </div>;
}