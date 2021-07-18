import React from 'react';
import "./NoteListItem.css";


const NoteListItem = (props) =>{

    // const removeItem = (e) => {
    //     e.currentTarget.parentNode.remove()
    // }

    return(
        <div className="note-item" id={props.id} key={props.id}>
            <h3 className="note-title">{props.title}</h3>
            {/* <textarea class="textArea" name="Text-Inp" rows="4" cols="50" maxlength="256" >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus, alias molestiae quibusdam a voluptas vitae repudiandae recusandae praesentium est reprehenderit harum deleniti pariatur eos sit mollitia minus iste nesciunt.
            </textarea> */}
            <p className="note-desc">{props.desc}</p>
                <i className="fas fa-times btn-close" onClick={props.onDelete}></i>
        </div>
    )
}

export default NoteListItem;
