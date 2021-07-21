import React from 'react';
import "./SideBar.css";

const SideBarNote = (props) => {
    //console.log(props.id)
    return (<li key={props.key} data-id={props.id} className="note-li">{props.title} <i className="fas fa-edit btn-edit" onClick={props.onEdit}> </i> <i className="fas fa-trash-alt btn-sidebar" onClick={props.onRemove} ></i> </li>)
}

export default SideBarNote