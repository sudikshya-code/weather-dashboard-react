import { useState } from "react";

import "./Contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {

        const { name, value } =
            event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setSubmitted(false);
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (

        <div className="contact-container">

            <section className="contact-header">

                <h1>
                    Contact Us
                </h1>

                <p>
                    Have a question, suggestion or
                    feedback? Send us a message.
                </p>

            </section>


            <section className="contact-content">

                {/* Contact Information */}

                <div className="contact-info">

                    <h2>
                        Get in Touch
                    </h2>

                    <p>
                        If you have questions or feedback
                        about the Weather Dashboard,
                        you can use the form to send us
                        a message.
                    </p>


                    <div className="info-item">

                        <span>
                            📧
                        </span>

                        <div>

                            <strong>
                                Email
                            </strong>

                            <p>
                                weatherdashboard@example.com
                            </p>

                        </div>

                    </div>


                    <div className="info-item">

                        <span>
                            🌍
                        </span>

                        <div>

                            <strong>
                                Location
                            </strong>

                            <p>
                                Kathmandu, Nepal
                            </p>

                        </div>

                    </div>


                    <div className="info-item">

                        <span>
                            💬
                        </span>

                        <div>

                            <strong>
                                Feedback
                            </strong>

                            <p>
                                Your feedback can help
                                improve the application.
                            </p>

                        </div>

                    </div>

                </div>


                {/* Contact Form */}

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">

                        <label htmlFor="name">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            rows="7"
                            required
                        />

                    </div>


                    <button
                        type="submit"
                    >
                        Send Message
                    </button>


                    {submitted && (

                        <p
                            className="success-message"
                            role="status"
                        >
                            Thank you! Your message
                            has been submitted successfully.
                        </p>

                    )}

                </form>

            </section>

        </div>
    );
}

export default Contact;