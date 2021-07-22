import React from 'react';
import "./AddNote.css";

const AddNote = (props) => {
    return (
        <div className="overlay">
        <div className="form-container">
          <label for="Title">Title</label>
  
          <input type="text" class="title" name="Title" required
          minlength="1" maxlength="12"/>
          <label for="Title">Content</label>
  
          <input type="text" class="title" name="Title" required
          minlength="1" maxlength="12"/>
  
          <a href="#" className="btn btn-submit">Submit</a>
  
          <i class="fas fa-times btn-close-form"></i>
        </div>
      </div>
    )
}

export default AddNote