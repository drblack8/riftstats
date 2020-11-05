import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Summoner from "./components/Summoner/Summoner";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Switch>
          <Route component={Summoner} path="/summoner/:input" />
          <Route component={Home} exact path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
