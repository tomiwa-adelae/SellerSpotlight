"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
exports.AuthProvider = AuthProvider;
const react_1 = require("react");
// Create a Context for the Auth state
const AuthContext = (0, react_1.createContext)(null);
function AuthProvider({ children }) {
    const [user, setUser] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        // Check if user data exists in localStorage
        const storedUser = localStorage.getItem("authenticatedUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    const login = (userData) => {
        // Save user data in localStorage and update state
        localStorage.setItem("authenticatedUser", JSON.stringify(userData));
        setUser(userData);
    };
    const logout = () => {
        // Remove user data from localStorage and update state
        localStorage.removeItem("authenticatedUser");
        setUser(null);
    };
    return (<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>);
}
const useAuth = () => {
    const context = (0, react_1.useContext)(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
exports.useAuth = useAuth;
