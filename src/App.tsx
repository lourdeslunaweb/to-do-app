import React from 'react';
import './App.css';
import 'bootswatch/dist/vapor/bootstrap.min.css';
import {Login, SignUp, Dashboard, CreateTask} from "./pages";
import {Header, Footer} from "./layout";

function App() {
  return (
    <>
    <Header/>
    <Login/>
    <SignUp/>
    <Dashboard/>
    <CreateTask/>
    <Footer/>
    </>
  );
}

export default App;
