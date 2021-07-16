import React from 'react';
import NoteListItem from './NoteListItem';

const NoteHolder = (props) => {

//    console.log(props.data) 
    return (
    <div className="noteHolder">
        {props.data.map(item => {
            // console.log(item.id)
            return (<NoteListItem title={item.title} desc={item.desc} key={item.id}/>)
        })}
    </div>)
}

export default NoteHolder;