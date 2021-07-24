import React,{useState} from 'react';
import "./AddNote.css";

const AddNote = (props) => {

  const closeWindow = () =>{
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('open')
  }

  const [titleInput, titleChange] = useState('')

  const titleChangeHandler = (e) =>{
    titleChange(e.currentTarget.value)
  }

  const [contentInput, contentChange] = useState('')

  const contentChangeHandler = (e) =>{
    contentChange(e.currentTarget.value)
  }

  //[title, content]
  const forwardData = () => {
    props.forwardData([titleInput,contentInput])
    closeWindow()
  }

    return (
        <div className="overlay">
          <div className="form-container">

            <div className="input-container">
            <label htmlFor="Title" >Note title</label>
    
            <input type="text" className="title" name="Title" required
            minLength="1" maxLength="8" placeholder="Title" onChange={titleChangeHandler}/>
            </div>

            <textarea className="note-text" name="note-text" rows="6" cols="50" onChange={contentChangeHandler} placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
            </textarea>
    
            <a href="#" className="btn btn-submit" onClick={forwardData} >Add note</a>
    
            <i className="fas fa-times btn-close-form" onClick={closeWindow} ></i>
          </div>
      </div>
    )
}

export default AddNote