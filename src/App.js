import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { makeStore } from './redux/store';
import SignIn from './SignIn';
import SignOut from './SignOut';
import NoteList from './NoteList';
import NoteCreate from './NoteCreate';

function App() {

  const store = makeStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/create'>Create</Link></li>
              <li><Link to='/sign-in'>Sign In</Link></li>
              <li><Link to='/sign-out'>Sign Out</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path='/sign-out'>
              <SignOut />
            </Route>
            <Route path='/sign-in'>
              <SignIn />
            </Route>
            <Route path='/create'>
              <NoteCreate />
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
