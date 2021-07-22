import React,{useState} from 'react';
import "./NoteListItem";
import ReactDOM from 'react-dom';

const EditField = (props) =>{

    // const [inEdit, inEditHandler] = useState('true');

  
    const gatherData= (e) => {

    }

    return(
    <React.Fragment>
        <textarea className="textArea" name={props.id} rows="8" cols="50" maxLength="256" defaultValue={props.content}>
        </textarea>
        <i className="fas fa-check tick-btn"></i>
    </React.Fragment>

    );

    
}


export default EditField;