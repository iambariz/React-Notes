import React from "react";
import SideBarNote from "./SideBarNote";
import "./SideBar.css";
import { Typography } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import List from "@material-ui/core/List";
import theme from "../theme";

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
		<Container
			className="sidebar"
			maxWidth={false}
			style={{
				width: "auto",
				backgroundColor: theme.palette.primary.dark,
			}}
		>
			<h1>
				<span className="username">John</span>'s notes
			</h1>
			<div className="div">
				<Button
					style={{
						width: "100%",
						maxHeight: "155px",
						minHeight: "60px",
						fontSize: "20px",
						letterSpacing: "3.5px",
						margin: "0 auto",
						borderRadius: ".75rem",
					}}
					color={"primary"}
					onClick={openNewNote}
					variant="contained"
					endIcon={<NoteAddIcon style={{ fontSize: "35px" }} />}
					size="large"
				>
					Create note
				</Button>
			</div>
			<div className="div">
				{/* <Typography variant="h4">My notes:</Typography> */}
				<List className="note-ul">
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
				</List>
			</div>
		</Container>
	);
};

export default SideBar;
