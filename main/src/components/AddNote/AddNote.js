import React from 'react';
import "./AddNote.css";

const AddNote = (props) => {

  const closeWindow = () =>{
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('open')
  }

    return (
        <div className="overlay">
          <div className="form-container">


            <div className="input-container">
            <label for="Title" >Note title</label>
    
            <input type="text" class="title" name="Title" required
            minLength="1" maxLength="12" placeholder="Title"/>
            </div>

            <textarea className="note-text" name="note-text" rows="6" cols="50" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
            </textarea>
    
            <a href="#" className="btn btn-submit" >Add note</a>
    
            <i class="fas fa-times btn-close-form" onClick={closeWindow} ></i>
          </div>
      </div>
    )
}

export default AddNote