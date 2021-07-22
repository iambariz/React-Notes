import React,{useState} from 'react';
import "./NoteListItem";
import ReactDOM from 'react-dom';

const EditField = (props) =>{

    // const [inEdit, inEditHandler] = useState('true');

    // const textEl = document.querySelector('.textArea');

    // textEl.addEventListener('onblur', e => {
    // })

    return(
    <React.Fragment>
        <textarea className="textArea" name="Text-Inp" rows="8" cols="50" maxLength="256">
        {props.content}
        </textarea>
        <i class="fas fa-check"></i>
    </React.Fragment>

    );
}


export default EditField;