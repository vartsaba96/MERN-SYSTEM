import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/todo-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";


function App() {
  return (
    <Router>
    <div className="container">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Todo app</Link>
        <div className="cpllapse nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/edit" className="nav-link">Edit Todos</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={TodoList}/>
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </div>
    </Router>
  );
}

export default App;
