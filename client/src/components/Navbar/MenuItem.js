import React, { Component } from "react";

function MenuItem(props) {
  return (
    <div
      className="menu-item"
      id={props.item.text}
      onClick={props.handleClick(props.item.text)}
    >
      {props.item.text.toUpperCase()}
    </div>
  );
}

export default MennuItem;
