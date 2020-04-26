import React from 'react';
import NoteList from './NoteList';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import NoteCreate from './NoteCreate';
import { createNote } from "./redux/actions/notes";
import { Provider } from 'react-redux';
import { makeStore } from './redux/store';

import { fireAuth } from './firebase/init'

function App() {

  const store = makeStore()

  const dispatchCreateNote = newValue => store.dispatch(createNote(newValue))

  fireAuth.signInWithEmailAndPassword('zachjohnston26+notes@pm.me', 'fr33range')
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });

  dispatchCreateNote('This note was automatically created in App.js')

  return (
    <Provider store={store}>
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
              <NoteCreate dispatchCreateNote={dispatchCreateNote} />
            </Route>
            <Route path='/notes'>
              <NoteList />
            </Route>
            <Route path='/'>
              <h1>Notes App</h1>
              <NoteList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
