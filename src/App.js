import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import SlotSelect from "./components/SlotSelect";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/slots" exact component={SlotSelect} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
