import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Archive from "./components/Archive";

function App() {
  return (
    <>
      <Router>
        {/* <Header/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Archive" exact component={Archive} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
