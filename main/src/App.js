import React, { useState } from "react";
import ReactDOM from "react-dom";
import NoteHolder from "./components/Note/NoteHolder";
import SideBar from "./components/Sidebar/SideBar";
import AddNote from "./components/AddNote/AddNote";
import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core/styles";
// import NoteListItem from './components/NoteListItem.js'

// const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus, alias molestiae quibusdam a voluptas vitae repudiandae recusandae praesentium est reprehenderit harum deleniti pariatur eos sit mollitia minus iste nesciunt."

//Dummy data

// const notes = [
//   {
//     title: "Test 1",
//     onEdit: true,
//     desc: content,
//     id: 1
//   },
//   {
//     title: "Test 2",
//     onEdit: false,
//     desc: content,
//     id: 2
//   },
//   {
//     title: "Test 3",
//     onEdit: false,
//     desc: content,
//     id: 3
//   },
//   {
//     title: "Test 4",
//     onEdit: false,
//     desc: content,
//     id: 4
//   },
//   {
//     title: "Test 5",
//     onEdit: false,
//     desc: content,
//     id: 5
//   },
//   {
//     title: "Test 6",
//     onEdit: false,
//     desc: content,
//     id: 6
//   },]
const theme = createTheme({
	palette: {
		primary: {
			main: "#00838e",
			light: "#4fb3be",
			dark: "#005661",
		},
		secondary: {
			main: "#bdbdbd",
			light: "#efefef",
			dark: "#8d8d8d",
		},
	},
});

const App = () => {
	const accesLocalStorage = () => {
		const notes = JSON.parse(localStorage.getItem("notes") || "[]");
		return notes;
	};

	const saveLocalStorage = (noteList) => {
		localStorage.setItem("notes", JSON.stringify(noteList));
		console.log(localStorage.setItem("notes", JSON.stringify(noteList)));
	};

	const [EditedNotes, updateNote] = useState(accesLocalStorage);

	const updateNoteHandler = (removedNote) => {
		//console.log(removedNote);
		updateNote((prevValue) => {
			const filtered = prevValue.filter(function (value) {
				// eslint-disable-next-line eqeqeq
				return value.id != removedNote;
			});
			saveLocalStorage(filtered);
			return filtered;
		});
	};
	const switchEditHandler = (editedElementId) => {
		// eslint-disable-next-line eqeqeq
		//   console.log(editedElementId)
		updateNote((prevValue) => {
			const filtered = prevValue.filter(function (value) {
				// eslint-disable-next-line eqeqeq
				if (value.id == editedElementId) {
					value.onEdit = true;
				}
				return value;
			});
			//      console.log(filtered)
			saveLocalStorage(filtered);
			return filtered;
		});
		// const element = document.querySelector(`[data-id*="${editedElementId}"]`);
		// element.classList.add('edited')
		// console.log(element)
	};

	//[value, id]
	const editDataGather = (arr) => {
		//   console.log(arr)
		updateNote((prevValue) => {
			const filtered = prevValue.filter(function (value) {
				// eslint-disable-next-line eqeqeq
				if (value.id == arr[1]) {
					value.onEdit = false;
					value.desc = arr[0];
				}
				return value;
			});
			//      console.log(filtered)
			saveLocalStorage(filtered);
			return filtered;
		});
	};

	//[title, content]
	const newNote = (arr) => {
		const newValue = {
			title: arr[0],
			onEdit: false,
			desc: arr[1],
			id: new Date().getTime(),
		};
		updateNote((prevValue) => {
			saveLocalStorage([...prevValue, newValue]);
			return [...prevValue, newValue];
		});
	};

	// }    setExpenses((prevExpenses) => {
	//   return [expense, ...prevExpenses];
	// });

	//Wasn't working
	// const updateNoteHandler = (removedNote) => {
	//   const newList = notes
	//   newList.splice(removedNote,1);
	//   console.log(newList)
	//   updateNote(newList);
	//   console.log(EditedNotes)
	// }

	return (
		// <div>   <NoteHolder></NoteHolder>
		// <NoteListItem title="Test title" desc={content} />
		// <NoteListItem title="Test title" desc={content} />
		// <NoteListItem title="Test title" desc={content} />
		// <NoteListItem title="Test title" desc={content} />
		// <NoteListItem title="Test title" desc={content} />
		// <NoteListItem title="Test title" desc={content} /></div>

		<ThemeProvider theme={theme}>
			<React.Fragment>
				{ReactDOM.createPortal(
					<AddNote forwardData={newNote} />,
					document.querySelector("#root")
				)}
				{ReactDOM.createPortal(
					<SideBar
						onChangeExpense={updateNoteHandler}
						onEditClick={switchEditHandler}
						data={EditedNotes}
					/>,
					document.querySelector("#root")
				)}
				{ReactDOM.createPortal(
					<NoteHolder
						passDataHandler={editDataGather}
						onChangeExpense={updateNoteHandler}
						data={EditedNotes}
					/>,
					document.querySelector("#root")
				)}
			</React.Fragment>
		</ThemeProvider>
	);
};

export default App;
