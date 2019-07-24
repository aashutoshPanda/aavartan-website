import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Events from "./Pages/Events/Events";
import Team from "./Pages/Team/Team";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery/" component={Gallery} />
        <Route exact path="/events/" component={Events} />
        <Route exact path="/team/" component={Team} />
      </div>
    </Router>
  );
}

export default App;
