import React,{useState} from 'react';
import SideBarNote from './SideBarNote';
import "./SideBar.css";


const SideBar = (props) => {

    const deleteItemHandler = (item) => {
        const index = item.currentTarget.parentNode.dataset.id;
        props.onChangeExpense(index)
    }

    const editItemHandler = (item) => {
        const id = item.currentTarget.parentNode.dataset.id;
        props.onEditClick(id)
    }

    const openNewNote = () =>{
        const overlay = document.querySelector('.overlay');
        overlay.classList.add('open')
    }
 
    // document.addEventListener('keypress', function(e){
    //     if(e.key === "e"){
    //         const el = document.querySelector('.sidebar');
    //         el.classList.add('open');
    //     }
    // })

    return (
    <div className="sidebar">
        <h1>  <span className="username">John</span>'s notes</h1>
        <div className="div">
            <a href="#" className="btn btn-create" onClick={openNewNote}>New note <i className="fas fa-plus-circle"></i></a>
        </div>
        <div className="div">
            <h2>My notes:</h2>
            <ul className="note-ul">
                {props.data.map((element, index) => {
                    return(<SideBarNote key={index} id={element.id} title={element.title} onRemove={deleteItemHandler} onEdit={editItemHandler}/>)
                })}
            </ul>
            
        </div>
        <div className="div"></div>
    </div>)
}

export default SideBar;