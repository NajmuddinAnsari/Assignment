import React, { useState } from "react";

import Header from "./components/Header";

import Preloader from "./components/Preloader";

import TabList from "./components/TabList";
import Card from "./components/Card";
import LatestNews from "./components/LatestNews";
import About from "./components/About"
import Sponser from "./components/Sponser"
import Contact from "./components/Contact"
import Fotter from "./components/Fotter"

function App() {
  const [isloading, setIsloading] = useState(true);
  const myGreeting = () => {
    setIsloading(false)
  }
  setTimeout(myGreeting, 2000);
  if (isloading) {
    return <Preloader />
  }
  if (!isloading) {
    return (
      <div className="">
        <header className="">
          <Header />
        </header>
        <About/>
        <Card />
        <TabList />
        <Sponser />
        <LatestNews />
        <Contact />
        <Fotter />
      </div>
    )
  }

}

export default App;
