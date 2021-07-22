import React from 'react';
import NoteListItem from './NoteListItem';

const NoteHolder = (props) => {

    const deleteItemHandler = (item) => {
        const index = item.currentTarget.parentNode.id;
        props.onChangeExpense(index)
    }

    const passDataHandler = (arr) => {
        props.passDataHandler(arr)
    }

//    console.log(props.data) 
    return (
    <div className="noteHolder">
        {props.data.map((item,index) => {
            // console.log(item.OnEdit)
            return (<NoteListItem onDelete={deleteItemHandler} passDataHandler={passDataHandler} title={item.title} id={item.id} desc={item.desc} key={index} onEdit={item.onEdit}/>)
        })}
    </div>)
}

export default NoteHolder;