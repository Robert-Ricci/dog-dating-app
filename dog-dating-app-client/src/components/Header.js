import React from 'react';


export default function Header() {
    return (<div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
                <div className="container">
                    <div className="navbar-brand" to="/">Dog Dating App</div>
                        <div className="collapse navbar-collapse" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <div className="nav-link mr-center" to="/matches">Matches</div>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <div className="nav-link" to="/petForm">Add Pet</div>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
    </div>);
}