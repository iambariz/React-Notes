import React from 'react';
import "./SideBar.css";


const SideBar = (props) => {

    // document.addEventListener('keypress', function(e){
    //     if(e.key === "e"){
    //         const el = document.querySelector('.sidebar');
    //         el.classList.add('open');
    //     }
    // })

    return (
    <div className="sidebar">
        <h1>  <span className="username">John</span>'s notes</h1>
        <div className="div"><a href="#" className="btn btn-create">New note <i class="fas fa-plus-circle"></i></a> </div>
        <div className="div">
            <h2>My notes:</h2>
            <ul className="note-ul">
                <li className="note-li">Test 1  <i className="fas fa-times btn-sidebar" ></i></li>
                <li className="note-li">Test 2  <i className="fas fa-times btn-sidebar" ></i></li>
                <li className="note-li">Test 3  <i className="fas fa-times btn-sidebar" ></i></li>
                <li className="note-li">Test 4  <i className="fas fa-times btn-sidebar" ></i></li>
            </ul>
        </div>
        <div className="div"></div>
    </div>)
}

export default SideBar;