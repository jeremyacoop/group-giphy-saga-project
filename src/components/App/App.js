import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import SearchForm from '../SearchForm/SearchForm';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <SearchForm />
    </div>
  );
}

export default App;
