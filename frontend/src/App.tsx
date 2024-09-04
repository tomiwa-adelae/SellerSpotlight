import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Sellers from "./pages/Sellers";
import Reviews from "./pages/Reviews";

import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./context/AuthProvider";

function App() {
	return (
		<AuthProvider>
			<ThemeProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/sellers" element={<Sellers />} />
					<Route path="/reviews" element={<Reviews />} />
				</Routes>
				<Toaster />
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
