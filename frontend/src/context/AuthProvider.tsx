import { createContext, useContext, useState, useEffect } from "react";

// Define the User type
interface User {
	fullName: string;
	email: string;
	picture: string;
}

// Define the AuthContext type
interface AuthContextType {
	user: User | null;
	login: (userData: User) => void;
	logout: () => void;
}

// Create a Context for the Auth state
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		// Check if user data exists in localStorage
		const storedUser = localStorage.getItem("authenticatedUser");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const login = (userData: any) => {
		// Save user data in localStorage and update state
		localStorage.setItem("authenticatedUser", JSON.stringify(userData));
		setUser(userData);
	};

	const logout = () => {
		// Remove user data from localStorage and update state
		localStorage.removeItem("authenticatedUser");
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
