import "./App.css";
import Lines from "./pages/Lines";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./state/context/AppContext";
import Home from "./pages/Home";
import Bars from "./pages/Bars";
import Pie from "./pages/Pie";
import Scatter from "./pages/Scatter";
import CandleStick from "./pages/CandleStick";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Lines} path="/lines" />
            <Route component={Bars} path="/bars" />
            <Route component={Pie} path="/pie" />
            <Route component={Scatter} path="/scatter" />
            <Route component={CandleStick} path="/ohlc-and-candlestick" />
          </Switch>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
