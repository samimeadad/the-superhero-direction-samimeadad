import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <nav className="bg-dark">
                <div className="container-fluid p-2">
                    <h1 className="text-info text-center">World <span className="text-warning">Thriller</span> Conference 2021</h1>
                    <h3 className="text-info text-center">The Most Thrilling and Exciting Event of the Year!</h3>
                    <h2 className="text-info text-center">Total Budget: <span className="text-warning">$10,000,000</span> (Ten Million USD)</h2>
                    <hr className="text-secondary" />
                </div>
            </nav>
        </div>
    );
};

export default Header;