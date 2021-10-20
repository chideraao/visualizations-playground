import "./App.css";
import Lines from "./pages/Lines";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./state/context/AppContext";
import Home from "./pages/Home";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Lines} path="/lines" />
          </Switch>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
