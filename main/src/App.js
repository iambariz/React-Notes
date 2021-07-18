import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import NoteHolder from './components/Note/NoteHolder';
import SideBar from './components/Sidebar/SideBar';
// import NoteListItem from './components/NoteListItem.js'

const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus, alias molestiae quibusdam a voluptas vitae repudiandae recusandae praesentium est reprehenderit harum deleniti pariatur eos sit mollitia minus iste nesciunt."


//Dummy data


const notes = [
  {
    title: "Test 1",
    desc: content,
    id: Math.random(),
  },
  {
    title: "Test 2",
    desc: content,
    id: Math.random(),
  },
  {
    title: "Test 3",
    desc: content,
    id: Math.random(),
  },
  {
    title: "Test 4",
    desc: content,
    id: Math.random(),
  },
  {
    title: "Test 5",
    desc: content,
    id: Math.random(),
  },
  {
    title: "Test 6",
    desc: content,
    id: Math.random(),
  },]

const App = () => {

  const [EditedNotes, updateNote] = useState(notes);

  const updateNoteHandler = (removedNote) => {
    console.log(removedNote);
    updateNote((prevValue) =>{
      const filtered = prevValue.filter(function(value){ 
        return value.id != removedNote;
      });
      return filtered
    })
  }
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

  return(
    // <div>   <NoteHolder></NoteHolder>
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} /></div>
    
    <React.Fragment>
      {ReactDOM.createPortal(<SideBar onChangeExpense={updateNoteHandler} data={EditedNotes} />, document.querySelector('#root'))}
      {ReactDOM.createPortal(<NoteHolder onChangeExpense={updateNoteHandler} data={EditedNotes} />, document.querySelector('#root'))}
    </React.Fragment>

 )
}


export default App;
