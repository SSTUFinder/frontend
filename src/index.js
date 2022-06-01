import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoggedContext from "./services/loggedContext";
import IdContext from "./services/idContext";

function Main() {
    const [isLogged, setIsLogged] = useState(false);
    const [userId, setUserId] = useState(null);

    return (
        <React.StrictMode>
            <LoggedContext.Provider value={{ isLogged, setIsLogged }}>
                <IdContext.Provider value={{ userId, setUserId }}>
                    <App />
                </IdContext.Provider>
            </LoggedContext.Provider>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
