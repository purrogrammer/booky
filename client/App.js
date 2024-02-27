import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookForm from './pages/BookForm';
import BooksList from './pages/BooksList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-book" component={BookForm} />
        <Route path="/" component={BooksList} />
      </Switch>
    </Router>
  );
}
export default App;
