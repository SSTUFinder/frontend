import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoggedContext from "./services/loggedContext";
import IdContext from "./services/idContext";
import RoleContext from "./services/roleContext";

function Main() {
    const [isLogged, setIsLogged] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState("student");

    return (
        <React.StrictMode>
            <LoggedContext.Provider value={{ isLogged, setIsLogged }}>
                <IdContext.Provider value={{ userId, setUserId }}>
                    <RoleContext.Provider value={{ userRole, setUserRole }}>
                        <App />
                    </RoleContext.Provider>
                </IdContext.Provider>
            </LoggedContext.Provider>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
