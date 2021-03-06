import React from "react";
import EditField from "./EditField";
import "./NoteListItem.css";
import CloseIcon from "@material-ui/icons/Close";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import noteTheme from "../Themes/noteTheme";

const NoteListItem = (props) => {
	// const removeItem = (e) => {
	//     e.currentTarget.parentNode.remove()
	// }

	const passDataHandler = (arr) => {
		props.passDataHandler(arr);
	};

	return (
		<Container
			className={props.onEdit ? "note-item onEdit" : "note-item"}
			data-id={props.id}
			key={props.key}
			style={{
				width: "20rem",
				height: "18rem",
				padding: "0px",
				backgroundColor: noteTheme.palette.primary.main,
			}}
		>
			<Typography
				variant="h5"
				className="note-title"
				style={{ backgroundColor: noteTheme.palette.primary.dark }}
			>
				{props.title}
			</Typography>
			{
				//Check if message failed
				props.onEdit === true ? (
					<EditField
						id={props.id}
						content={props.desc}
						passData={passDataHandler}
					/>
				) : (
					<p className="note-desc">{props.desc}</p>
				)
			}
			<CloseIcon
				size="large"
				className="fas fa-times btn-close"
				onClick={props.onDelete}
			/>
		</Container>
	);
};

export default NoteListItem;
