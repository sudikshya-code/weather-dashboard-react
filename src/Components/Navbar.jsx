import { Link } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
    return (
        <nav className="navbar">

            <div className="navbar-brand">
                <Link to="/">
                    Weather App
                </Link>
            </div>

            <div className="nav-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/about">
                    About
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

                <button
                    className="theme-button"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${
                        theme === "dark" ? "light" : "dark"
                    } mode`}
                >
                    {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
                </button>

            </div>

        </nav>
    );
}

export default Navbar;