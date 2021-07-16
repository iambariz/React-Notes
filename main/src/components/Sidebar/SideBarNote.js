import React from 'react';
import "./SideBar.css";

const SideBarNote = (props) => {
    console.log(props.id)
    return (<li  id={props.id} className="note-li">{props.title} <i className="fas fa-times btn-sidebar" onClick={props.onRemove} ></i></li>)
}

export default SideBarNote