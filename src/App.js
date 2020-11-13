import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

import TodoList from "./pages/TodoList";
import About from "./about/About";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodoList}></Route>
        <Route path="/About" component={About}></Route>
      </Switch>
    </Router>
  );
}
