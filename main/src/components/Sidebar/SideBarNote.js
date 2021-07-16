import React from 'react';
import "./SideBar.css";

const SideBarNote = (props) => {
    return (<li onDelete={props.remove} className="note-li">{props.title} <i className="fas fa-times btn-sidebar" ></i></li>)
}

export default SideBarNote