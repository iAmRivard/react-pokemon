import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import NotFound from "./components/NotFound";
import Poke from "./pages/Poke";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/:pokemon" component={Poke} />
          <Route exact path="/" component={Inicio} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
