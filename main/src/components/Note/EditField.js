import React,{useState} from 'react';
import "./NoteListItem";

const EditField = (props) =>{

    // const [inEdit, inEditHandler] = useState('true');

    // const textEl = document.querySelector('.textArea');

    // textEl.addEventListener('onblur', e => {
    // })

    return(
    <textarea className="textArea" name="Text-Inp" rows="9" cols="50" maxLength="256" >
    {props.content}
     </textarea>
    );
}


export default EditField;