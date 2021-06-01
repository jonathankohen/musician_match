import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Navbar({ user, setUser }) {
    const history = useHistory();

    const handleLogout = () => {
        axios
            .get('http://localhost:8000/api/logout', { withCredentials: true })
            .then(res => {
                setUser(false);
                history.push('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand text-primary" to="/" id="logo">
                    <em>MM</em>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                How it Works
                            </Link>
                        </li>
                        <li className="nav-item">
                            {user ? (
                                <Link
                                    className="nav-link"
                                    to={`/edit/${user.id}`}
                                >
                                    Edit Profile
                                </Link>
                            ) : (
                                ''
                            )}
                        </li>
                        <li className="nav-item">
                            {user ? (
                                <Link className="nav-link" to="/top_matches">
                                    Top Matches
                                </Link>
                            ) : (
                                ''
                            )}
                        </li>
                        <li className="nav-item">
                            {user ? (
                                <Link className="nav-link" to="/directory">
                                    Directory
                                </Link>
                            ) : (
                                ''
                            )}
                        </li>
                    </ul>

                    {user ? (
                        <Link
                            className="text-secondary"
                            to="/logout"
                            onClick={handleLogout}
                        >
                            Logout
                        </Link>
                    ) : (
                        <Link className="text-secondary" to="/login">
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}
