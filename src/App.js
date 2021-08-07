import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">My React CRUD App</h2>
        <div>
          <Route path="/create" exact component={Create} />
          <div style={{ marginTop: "20px" }}>
            <Route path="/read" exact component={Read} />
          </div>
          <Route path="/update" exact component={Update} />
        </div>
      </div>
    </Router>
  );
}

export default App;
