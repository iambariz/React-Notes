import React from "react";
import "./SideBar.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const SideBarNote = (props) => {
	//console.log(props.id)
	return (
		<li key={props.id} data-id={props.id} className="note-li">
			<span>{props.title}</span>
			<EditIcon className="fas fa-edit btn-edit" onClick={props.onEdit} />
			<DeleteForeverIcon
				className="fas fa-trash-alt btn-sidebar"
				onClick={props.onRemove}
			/>
		</li>
	);
};

export default SideBarNote;
