import React,{useState} from 'react';
import "./SideBar.css";

const EditField = (props) =>{

    // const [inEdit, inEditHandler] = useState('true');

    const textEl = document.querySelector('.textArea');

    textEl.addEventListener('onblur', e => {
        console.log("works")
    })

    return(
    <textarea class="textArea" name="Text-Inp" rows="4" cols="50" maxlength="256" >
    {props.content}
     </textarea>
    );
}


export default EditField;