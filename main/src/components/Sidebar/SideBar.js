import React from "react";
import SideBarNote from "./SideBarNote";
import "./SideBar.css";
import { Typography } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Button from "@material-ui/core/Button";

const SideBar = (props) => {
	const deleteItemHandler = (item) => {
		const index = item.currentTarget.parentNode.dataset.id;
		props.onChangeExpense(index);
	};

	const editItemHandler = (item) => {
		const id = item.currentTarget.parentNode.dataset.id;
		props.onEditClick(id);
	};

	const openNewNote = () => {
		const overlay = document.querySelector(".overlay");
		overlay.classList.add("open");
	};

	// document.addEventListener('keypress', function(e){
	//     if(e.key === "e"){
	//         const el = document.querySelector('.sidebar');
	//         el.classList.add('open');
	//     }
	// })

	return (
		<div className="sidebar">
			<h1>
				{" "}
				<span className="username">John</span>'s notes
			</h1>
			<div className="div">
				<Button
					color="secondary"
					onClick={openNewNote}
					variant="contained"
					endIcon={<NoteAddIcon />}
					size="large"
				>
					Add note
				</Button>
			</div>
			<div className="div">
				<Typography variant="h2">My notes:</Typography>
				<ul className="note-ul">
					{props.data.map((element, index) => {
						return (
							<SideBarNote
								id={element.id}
								title={element.title}
								onRemove={deleteItemHandler}
								onEdit={editItemHandler}
							/>
						);
					})}
				</ul>
			</div>
			<div className="div"></div>
		</div>
	);
};

export default SideBar;
