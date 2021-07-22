import React,{useState} from 'react';
import "./NoteListItem";

const EditField = (props) =>{

    // const [inEdit, inEditHandler] = useState('true');


    //Gets the value 
    //[value, id]
  
    const gatherData= (e) => {
        
        const newValue = e.currentTarget.previousSibling.value;
        if(newValue.trim().length > 1){
            props.passData([newValue, e.currentTarget.previousSibling.name]) 
        }
        else{
            props.passData([e.currentTarget.previousSibling.defaultValue, e.currentTarget.previousSibling.name]) 
        }
    }

    return(
    <React.Fragment>
        <textarea className="textArea" name={props.id} rows="6" cols="50" maxLength="256" defaultValue={props.content}>
        </textarea>
        <i onClick={gatherData} className="fas fa-check tick-btn"></i>
    </React.Fragment>

    );

    
}


export default EditField;