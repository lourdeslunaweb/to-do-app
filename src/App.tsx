import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootswatch/dist/vapor/bootstrap.min.css';
import {Login, SignUp, Dashboard, CreateTask, Unlogged} from "./pages";
// import {Header, Footer} from "./layout";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/sign-up" component={SignUp}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/create-task" component={CreateTask}/>
      <Route path="/" component={Unlogged}/>
    </Switch>
    </BrowserRouter>

  );
}

export default App;
