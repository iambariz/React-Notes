import React,{useState} from 'react';
import "./SideBar.css";

const EditField = (props) =>{

    const [inEdit, inEditHandler] = useState('false');

    return(
    <textarea class="textArea" name="Text-Inp" rows="4" cols="50" maxlength="256" >
    {props.content}
     </textarea>
    );
}


export default EditField;