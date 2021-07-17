import React from 'react';
import "./NoteListItem.css";


const NoteListItem = (props) =>{

    // const removeItem = (e) => {
    //     e.currentTarget.parentNode.remove()
    // }

    return(
        <div className="note-item" id={props.id} key={props.id}>
            <h3 className="note-title">{props.title}</h3>
            <p className="note-desc">{props.desc}</p>
                <i className="fas fa-times btn-close" onClick={props.onDelete}></i>
        </div>
    )
}

export default NoteListItem;
