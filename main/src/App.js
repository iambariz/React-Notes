import React from 'react';
import NoteHolder from './components/NoteHolder';
import NoteListItem from './components/NoteListItem.js'

const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus, alias molestiae quibusdam a voluptas vitae repudiandae recusandae praesentium est reprehenderit harum deleniti pariatur eos sit mollitia minus iste nesciunt."

const App = () => {
  return(
    <div> 
    <NoteHolder/>
    <NoteListItem title="Test title" desc={content} />
    </div>
 )
}


export default App;
