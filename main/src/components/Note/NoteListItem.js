import React,{useState} from 'react';
import EditField from './EditField';
import "./NoteListItem.css";


const NoteListItem = (props) =>{

    // const removeItem = (e) => {
    //     e.currentTarget.parentNode.remove()
    // }

    const passDataHandler = (arr) =>{
        props.passDataHandler(arr) 
    }

    return(
        <div className={props.onEdit ? "note-item edited" : "note-item"} data-id={props.id} key={props.key}>
            <h3 className="note-title">{props.title}</h3>
            { //Check if message failed
                (props.onEdit === true)
                ? <EditField id={props.id} content={props.desc} passData={passDataHandler}/>
                : <p className="note-desc">{props.desc}</p>
            }  
                <i className="fas fa-times btn-close" onClick={props.onDelete}></i>
        </div>
    )
}

export default NoteListItem;
