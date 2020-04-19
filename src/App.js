import React from 'react';
import NoteList from './NoteList';

function App() {

  const notes = [
    {
      id: 1,
      subject: 'subject 1',
      body: 'body 1',
     },
     {
       id: 2,
       subject: 'subject 2',
       body: 'body 2',
     }
  ]

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;
