"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
exports.ThemeProvider = ThemeProvider;
const react_1 = require("react");
const ThemeContext = (0, react_1.createContext)(undefined);
function ThemeProvider({ children }) {
    const [mode, setMode] = (0, react_1.useState)("");
    const handleThemeChange = () => {
        if (localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme:dark)").matches)) {
            setMode("dark");
            document.documentElement.classList.add("dark");
        }
        else {
            setMode("light");
            document.documentElement.classList.remove("dark");
        }
    };
    (0, react_1.useEffect)(() => {
        handleThemeChange();
    }, [mode]);
    return (<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>);
}
const useTheme = () => {
    const context = (0, react_1.useContext)(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a themeprovider");
    }
    return context;
};
exports.useTheme = useTheme;
