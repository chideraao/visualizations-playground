import "./App.css";
import Lines from "./pages/Lines";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./state/context/AppContext";
import Home from "./pages/Home";
import Bars from "./pages/Bars";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Lines} path="/lines" />
            <Route component={Bars} path="/bars" />
          </Switch>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
