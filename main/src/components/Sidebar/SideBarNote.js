import React from 'react';
import "./SideBar.css";

const SideBarNote = (props) => {
    console.log(props.id)
    return (<li key={props.key} id={props.id} className="note-li">{props.title} <i class="fas fa-edit btn-edit"></i> <i className="fas fa-trash-alt btn-sidebar" onClick={props.onRemove} ></i> </li>)
}

export default SideBarNote