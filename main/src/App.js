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
    id: 1,
  },
  {
    title: "Test 2",
    desc: content,
    id: 2,
  },
  {
    title: "Test 3",
    desc: content,
    id: 3,
  },
  {
    title: "Test 4",
    desc: content,
    id: 4,
  },
  {
    title: "Test 5",
    desc: content,
    id: 5,
  },
  {
    title: "Test 6",
    desc: content,
    id: 6,
  },]

const App = () => {

  const [EditedNotes, updateNotes] = useState(notes);



  return(
    // <div>   <NoteHolder></NoteHolder>
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} />
    // <NoteListItem title="Test title" desc={content} /></div>
    <React.Fragment>
      {ReactDOM.createPortal(<SideBar data={EditedNotes} />, document.querySelector('#root'))}
      {ReactDOM.createPortal(<NoteHolder data={EditedNotes} />, document.querySelector('#root'))}
    </React.Fragment>

 )
}


export default App;
