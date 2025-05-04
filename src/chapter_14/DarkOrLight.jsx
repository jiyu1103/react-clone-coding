import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        //하위 컴포넌트들이 ThemeContext 값을 가져오기 위함
        <ThemeContext.Provider value={{ theme, toggleTheme }}> 
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;