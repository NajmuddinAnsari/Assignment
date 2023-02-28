import React from "react";
// import logo from './logo.svg';
// import './App.css';

import Header from "./Header";

import Preloader from "./Preloader";
import { BsCircle } from "react-icons/bs";
import Speaks from "./Speaks";
import TabList from "./TabList";
import Card from "./Card";

function App() {
  return (
    <div className="">
      {/* <Preloader /> */}
      
      <header className="">
        <Header />
      </header>
      {/* <div className="p-3">
        <Speaks />
      </div> */}
      <TabList />
      
        <Card />

    </div>
  );
}

export default App;
