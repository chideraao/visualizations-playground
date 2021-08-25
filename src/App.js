import "./App.css";
import Lines from "./pages/Lines";
import { AppProvider } from "./state/context/AppContext";

function App() {
	return (
		<AppProvider>
			<div className="App">
				<Lines />
			</div>
		</AppProvider>
	);
}

export default App;
