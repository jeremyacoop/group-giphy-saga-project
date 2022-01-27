import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
    <Router>
      <SearchForm />

    <Route exact path='/random'>
      <Home />
    </Route>
    </Router>
    </div>
  );
}

export default App;
