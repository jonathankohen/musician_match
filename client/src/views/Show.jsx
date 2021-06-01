import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    state: '',
    priInst: '',
    secInst: '',
    bio: '',
    seeking: '',
    musicLink: '',
    userWebsite: '',
};

export default function Show(props) {
    const [user, setUser] = useState(initialUser);
    const history = useHistory();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${props.id}`, {
                withCredentials: true,
            })
            .then(res => setUser(res.data.results))
            .catch(err => {
                console.log(err);
                if (err.response === 401) {
                    history.push('/login');
                }
            });
    }, [props, history]);

    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col my-5">
                        {/* TODO: user uploads pics, video, recordings */}

                        <div
                            className="jumbotron shadow-lg animate__animated animate__fadeIn"
                            id="landing_hero"
                        >
                            <h1 className="display-4 font-weight-bolder text-center mb-5">
                                {user.firstName} {user.lastName}
                            </h1>

                            <h2 className="card-subtitle my-5 text-muted text-center">
                                Seeking:{' '}
                                <span className="seekingText">
                                    {user.seeking}
                                </span>
                            </h2>

                            <h3 className="text-center my-5">
                                {user.city}, {user.state} {user.zip}
                            </h3>
                            <p className="lead mx-3">
                                <strong>Bio:</strong> {user.bio}
                            </p>

                            <hr className="my-5" />

                            <div className="row d-flex justify-content-around align-items-center">
                                <p>
                                    <strong>Primary Instrument: </strong>
                                    {user.priInst}
                                </p>

                                <p>
                                    <strong>Secondary Instrument: </strong>
                                    {user.secInst ? user.secInst : '--'}
                                </p>
                            </div>

                            <div className="row d-flex justify-content-center align-items-center">
                                {user.musicLink ? (
                                    <p className="mr-2">
                                        <a
                                            href={user.musicLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Music
                                        </a>
                                    </p>
                                ) : (
                                    ''
                                )}

                                {user.userWebsite ? (
                                    <p className="mr-2">
                                        <a
                                            href={user.userWebsite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Website
                                        </a>
                                    </p>
                                ) : (
                                    ''
                                )}
                                <p>
                                    <a
                                        href={`mailto:${user.email}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Email
                                    </a>
                                </p>
                            </div>

                            {/* TODO: socket user-to-user messaging */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
