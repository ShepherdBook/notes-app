import React from 'react';
import NoteList from './NoteList';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/notes'>List</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path='/notes'>
            <NoteList notes={notes} />
          </Route>
          <Route path='/'>
            <h1>Notes App</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
