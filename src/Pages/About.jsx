import "./About.css";

function About() {

    return (

        <div className="about-container">

            <section className="about-header">

                <h1>
                    About Weather Dashboard
                </h1>

                <p>
                    A simple and responsive weather
                    application built with modern
                    web technologies.
                </p>

            </section>


            <section className="about-card">

                <h2>
                    About the Application
                </h2>

                <p>
                    Weather Dashboard is a client-side
                    React application that allows users
                    to view live weather information for
                    different cities around the world.
                </p>

                <p>
                    The application retrieves weather
                    information from the OpenWeatherMap
                    REST API and displays important
                    information such as temperature,
                    humidity, weather conditions and
                    wind speed.
                </p>

            </section>


            <section className="technology-section">

                <h2>
                    Technology Stack
                </h2>

                <div className="technology-grid">

                    <div className="technology-card">

                        <span className="tech-icon">
                            ⚛️
                        </span>

                        <h3>
                            React
                        </h3>

                        <p>
                            Used to build the interactive
                            user interface and manage
                            application state.
                        </p>

                    </div>


                    <div className="technology-card">

                        <span className="tech-icon">
                            🧭
                        </span>

                        <h3>
                            React Router
                        </h3>

                        <p>
                            Provides client-side navigation
                            between Home, About and Contact
                            without full-page refreshes.
                        </p>

                    </div>


                    <div className="technology-card">

                        <span className="tech-icon">
                            📡
                        </span>

                        <h3>
                            Axios
                        </h3>

                        <p>
                            Used to make asynchronous HTTP
                            requests to the weather API.
                        </p>

                    </div>


                    <div className="technology-card">

                        <span className="tech-icon">
                            ☁️
                        </span>

                        <h3>
                            OpenWeatherMap
                        </h3>

                        <p>
                            Provides live weather and
                            forecast information for
                            selected cities.
                        </p>

                    </div>


                    <div className="technology-card">

                        <span className="tech-icon">
                            💾
                        </span>

                        <h3>
                            Local Storage
                        </h3>

                        <p>
                            Stores user preferences such
                            as the selected theme and
                            temperature unit.
                        </p>

                    </div>


                    <div className="technology-card">

                        <span className="tech-icon">
                            📊
                        </span>

                        <h3>
                            Recharts
                        </h3>

                        <p>
                            Used to display the five-day
                            temperature forecast as an
                            interactive line chart.
                        </p>

                    </div>

                </div>

            </section>


            <section className="features">

                <h2>
                    Key Features
                </h2>

                <div className="feature-grid">

                    <div>
                        <strong>
                            🌍 Multiple Cities
                        </strong>

                        <p>
                            Users can select weather
                            information from different
                            cities around the world.
                        </p>
                    </div>


                    <div>
                        <strong>
                            🔄 Live Data
                        </strong>

                        <p>
                            Weather information is
                            retrieved asynchronously
                            from a REST API.
                        </p>
                    </div>


                    <div>
                        <strong>
                            🌓 Theme Preference
                        </strong>

                        <p>
                            Users can switch between
                            dark and light themes.
                        </p>
                    </div>


                    <div>
                        <strong>
                            📱 Responsive
                        </strong>

                        <p>
                            The interface adapts to
                            desktop, tablet and mobile
                            screen sizes.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default About;