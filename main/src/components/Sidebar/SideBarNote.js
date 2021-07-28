import React from "react";
import "./SideBar.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../Themes/theme";
import NotesIcon from "@material-ui/icons/Notes";

const SideBarNote = (props) => {
	//console.log(props.id)
	return (
		<ThemeProvider theme={theme}>
			<ListItem
				key={props.id}
				data-id={props.id}
				color={"primary"}
				className="note-li"
				style={{
					maxWidth: "15rem",
					maxHeight: "3.25rem",
					backgroundColor: theme.palette.primary.light,
					padding: "1.75rem, auto",
				}}
			>
				<ListItemAvatar>
					<Avatar
						style={{
							backgroundColor: theme.palette.primary.light,
						}}
					>
						<NotesIcon
							style={{
								fontSize: 20,
								color: theme.palette.secondary.light,
							}}
						/>
					</Avatar>
				</ListItemAvatar>
				<ListItemText>{props.title}</ListItemText>
				<EditIcon className="btn-edit" onClick={props.onEdit} />
				<DeleteForeverIcon className="btn-edit" onClick={props.onRemove} />
			</ListItem>
		</ThemeProvider>
	);
};

export default SideBarNote;
