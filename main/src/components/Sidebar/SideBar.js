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
        <div className="div"></div>
        <div className="div"></div>
    </div>)
}

export default SideBar;