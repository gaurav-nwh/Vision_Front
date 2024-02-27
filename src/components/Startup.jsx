import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Support.css'; // Import your Support-specific CSS file

export default function Support() {
    const [showForm, setShowForm] = useState(false);
    const [showTable, setShowTable] = useState(false);

    const handleWantHelpClick = () => {
        setShowForm(true);
        setShowTable(false);
    };

    const handleWantToHelpClick = () => {
        setShowForm(false);
        setShowTable(true);
    };

    return (
        <div>
            <Header />
            <div className="buttonContainer">
                <button className="button" onClick={handleWantHelpClick}>
                    Want Investment
                </button>
                <button className="button" onClick={handleWantToHelpClick}>
                    Want to Invest
                </button>
            </div>

            {showForm && (
                <div className="formContainer">
                    <h2>Help Form</h2>
                    <form>
                        <label>Name:</label>
                        <input type="text" required />
                        <label>Email:</label>
                        <input type="email" required />
                        <label>Phone:</label>
                        <input type="tel" required />
                        <label>Message:</label>
                        <textarea required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}

            {showTable && (
                <div className="tableContainer">
                    <h2>Help Table</h2>
                    <table>
                        {/* Table content goes here */}
                    </table>
                </div>
            )}

            <Footer />
        </div>
    );
}
