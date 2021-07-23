import React from 'react';
import "./AddNote.css";

const AddNote = (props) => {
    return (
        <div className="overlay">
        <div className="form-container">


          <div className="input-container">
          <label for="Title" >Note title</label>
  
          <input type="text" class="title" name="Title" required
          minlength="1" maxlength="12" placeholder="Title"/>
          </div>

          <textarea className="note-text" name="note-text" rows="6" cols="50" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
          </textarea>
  
          <a href="#" className="btn btn-submit" >Add note</a>
  
          <i class="fas fa-times btn-close-form"></i>
        </div>
      </div>
    )
}

export default AddNote