import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import "./App.css";

function App() {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    const toggleTheme = () => {

        const newTheme =
            theme === "dark" ? "light" : "dark";

        setTheme(newTheme);

        localStorage.setItem(
            "theme",
            newTheme
        );
    };

    return (
        <BrowserRouter>

            <div className={`app ${theme}`}>

                <Navbar
                    theme={theme}
                    toggleTheme={toggleTheme}
                />

                <main>

                    <Routes>

                        <Route
                            path="/"
                            element={<Home />}
                        />

                        <Route
                            path="/about"
                            element={<About />}
                        />

                        <Route
                            path="/contact"
                            element={<Contact />}
                        />

                    </Routes>

                </main>

            </div>

        </BrowserRouter>
    );
}

export default App;