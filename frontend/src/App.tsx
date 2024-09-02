import Header from "./components/shared/Header";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
	return (
		<ThemeProvider>
			<Header />
		</ThemeProvider>
	);
}

export default App;
