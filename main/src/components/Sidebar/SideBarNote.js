import React from "react";
import "./SideBar.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import FolderIcon from "@material-ui/icons/Folder";

const styles = (theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
	},
	selected: {
		backgroundColor: "red",
	},
});

const SideBarNote = (props) => {
	//console.log(props.id)
	return (
		<ListItem
			key={props.id}
			data-id={props.id}
			color={"primary"}
			className="note-li"
			style={{
				maxWidth: "13rem",
				maxHeight: "3rem",
				backgroundColor: "primary",
			}}
		>
			<ListItemAvatar>
				<Avatar>
					<FolderIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText>{props.title}</ListItemText>
			<EditIcon className="fas fa-edit btn-edit" onClick={props.onEdit} />
			<IconButton edge="end" aria-label="delete">
				<DeleteForeverIcon onClick={props.onRemove} />
			</IconButton>
		</ListItem>
	);
};

export default SideBarNote;
