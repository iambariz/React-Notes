import React from 'react';
import NoteListItem from './NoteListItem';

const NoteHolder = (props) => {

    const deleteItemHandler = (item) => {
        const index = item.currentTarget.parentNode.id;
        props.onChangeExpense(index)
    }

//    console.log(props.data) 
    return (
    <div className="noteHolder">
        {props.data.map((item,index) => {
            // console.log(item.id)
            return (<NoteListItem onDelete={deleteItemHandler} title={item.title} id={item.id} desc={item.desc} key={index}/>)
        })}
    </div>)
}

export default NoteHolder;