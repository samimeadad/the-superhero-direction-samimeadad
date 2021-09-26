import React from 'react';

const Header = () => {
    return (
        <div className="header mb-4">
            <nav className="bg-dark container border border-secondary rounded-bottom rounded-3 pb-2">
                <div className="container-fluid p-2">
                    <h1 className="text-info text-center"><span className="text-warning">I</span>nternational <span className="text-warning">T</span>hriller <span className="text-warning">C</span>onference <span className="text-warning">2021</span></h1>
                    <h3 className="text-info text-center">The Most Thrilling and Exciting Event of the Year!</h3>
                    <h2 className="text-info text-center">Total Budget: <span className="text-warning">$10,000,000</span> (Ten Million USD)</h2>
                </div>
            </nav>
        </div>
    );
};

export default Header;