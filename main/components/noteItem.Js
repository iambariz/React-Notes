import React from 'react';

const noteItem = (props) =>{
    return(
        <div className="note-item">
            <h3 className="note-title">{props.title}</h3>
            <p className="note-desc">{props.desc}</p>
            <a href="#" class="btn-btn-close">
                <i class="fas fa-times"></i>
            </a>
        </div>
    )
}

export default noteItem;
