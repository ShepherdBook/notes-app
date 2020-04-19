import React from 'react';
import NoteList from './NoteList';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import NoteCreate from './NoteCreate';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { saveNote } from "./redux/actions";

function App() {

  const initialState = {
    notes: [
      {
        id: 'a',
        value: 'note 1',
      },
      {
        id: 'b',
        value: 'note 2',
      }
    ]
  }

  const store = createStore(reducer, initialState)

  console.log(store.getState())
  store.dispatch(saveNote({id:'c', value: 'new note'}))
  console.log(store.getState())

  const {notes} = store.getState()

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/notes'>List</Link></li>
            <li><Link to='/create'>Create</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path='/create'>
            <NoteCreate />
          </Route>
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
