import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import Navbar from "./components/Navbar/Navbar";
import Summoner from "./components/Summoner/Summoner";
import Demo from "./components/Demo/Demo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Switch>
          <Route component={Summoner} path="/summoner/:input" />
          <Route component={Login} path="/login" />
          <Route component={Demo} path="/demo" />
          <Route component={Login} path="/account" />
          <Route component={Home} exact path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
