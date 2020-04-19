import React from 'react';
import NoteList from './NoteList';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import NoteCreate from './NoteCreate';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { createNote } from "./redux/actions";
import { Provider } from 'react-redux';

function App() {

  const store = createStore(reducer, {})

  const dispatchCreateNote = newValue => store.dispatch(createNote(newValue))

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
