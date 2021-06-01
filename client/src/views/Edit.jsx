import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    state: '',
    zip: '',
    priInst: '',
    secInst: '',
    bio: '',
    seeking: '',
    musicLink: '',
    userWebsite: '',
    matches: [],
    likes: [],
    dislikes: [],
    superlikes: [],
    likedBy: [],
};

export default function Edit(props) {
    const [edit, setEdit] = useState(initialUser);

    const [errors, setErrors] = useState(initialUser);

    const history = useHistory();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${props.id}`, {
                withCredentials: true,
            })
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err));
    }, [props]);

    const handleInputChange = e => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        });
    };

    const checkURL = e => {
        let string = e.target.value;
        if (!string.match(/^https?:/) && string.length) {
            string = 'https://' + string;
            e.target.value = string;
        }
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        setErrors(initialUser);
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/update/user/${props.id}`, edit, {
                withCredentials: true,
            })
            .then(res => {
                if (res.data.results) {
                    history.push('/users');
                } else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div
                className="jumbotron shadow-lg my-5 animate__animated animate__fadeIn"
                id="landing_hero"
            >
                <div className="row">
                    <div className="col">
                        <h1 className="display-4 font-weight-bolder text-center mb-5">
                            {edit.firstName} {edit.lastName}
                        </h1>

                        {/* TODO: user uploads for prof pics, recordings, videos */}

                        <h2 className="card-subtitle my-5 text-muted text-center">
                            Seeking:{' '}
                            <span className="seekingText">{edit.seeking}</span>
                        </h2>
                        <h3 className="text-center my-5">
                            {edit.city}, {edit.state}
                        </h3>
                        <p className="lead mx-3">
                            <strong>Bio:</strong> {edit.bio}
                        </p>

                        <hr className="my-5" />

                        <div className="row d-flex justify-content-around align-items-center">
                            <p>
                                <strong>Primary Instrument: </strong>
                                {edit.priInst}
                            </p>
                            <p>
                                <strong>Secondary Instrument: </strong>
                                {edit.secInst ? edit.secInst : '--'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col animate__animated animate__fadeInUp">
                    <h1 className="display-4 font-weight-bolder text-center mb-4 text-light text-underline textShadow">
                        Edit:
                    </h1>
                    <form
                        encType="multipart/form‐data"
                        onSubmit={handleSubmit}
                        className="col-12 col-lg-4 mx-auto"
                    >
                        <div className="row mb-2">
                            <div className="col">
                                <input
                                    name="firstName"
                                    value={edit.firstName}
                                    type="text"
                                    className="form-control shadow"
                                    onChange={handleInputChange}
                                />
                                <span className="text-danger">
                                    {errors.firstName
                                        ? errors.firstName.message
                                        : ''}
                                </span>
                            </div>
                            <div className="col">
                                <input
                                    name="lastName"
                                    value={edit.lastName}
                                    type="text"
                                    className="form-control shadow"
                                    onChange={handleInputChange}
                                />
                                <span className="text-danger">
                                    {errors.lastName
                                        ? errors.lastName.message
                                        : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <input
                                    name="city"
                                    value={edit.city}
                                    type="text"
                                    className="form-control shadow"
                                    onChange={handleInputChange}
                                />
                                <span className="text-danger">
                                    {errors.city ? errors.city.message : ''}
                                </span>
                            </div>

                            <div className="col">
                                <select
                                    className="custom-select"
                                    name="state"
                                    onChange={handleInputChange}
                                    value={edit.state}
                                >
                                    <option defaultValue>{edit.state}</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DC">
                                        District of Columbia
                                    </option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="IA">Iowa</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MD">Maryland</option>
                                    <option value="ME">Maine</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MT">Montana</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NY">New York</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oediton</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VA">Virginia</option>
                                    <option value="VT">Vermont</option>
                                    <option value="WA">Washington</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <span className="text-danger">
                                    {errors.state ? errors.state.message : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <select
                                    className="custom-select"
                                    name="priInst"
                                    onChange={handleInputChange}
                                    value={edit.priInst}
                                >
                                    <option defaultValue>{edit.priInst}</option>
                                    <option value="Guitar">Guitar</option>
                                    <option value="Drums">Drums</option>
                                    <option value="Bass">Bass</option>
                                    <option value="Vocals">Vocals</option>
                                    <option value="Synth">Synth</option>
                                </select>
                                <span className="text-danger">
                                    {errors.priInst
                                        ? errors.priInst.message
                                        : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <select
                                    className="custom-select"
                                    name="secInst"
                                    onChange={handleInputChange}
                                    value={edit.secInst}
                                >
                                    <option defaultValue>
                                        {edit.secInst ? edit.secInst : '--'}
                                    </option>
                                    <option value="Guitar">Guitar</option>
                                    <option value="Drums">Drums</option>
                                    <option value="Bass">Bass</option>
                                    <option value="Vocals">Vocals</option>
                                    <option value="Synth">Synth</option>
                                </select>
                                <span className="text-danger">
                                    {errors.secInst
                                        ? errors.secInst.message
                                        : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <select
                                    className="custom-select"
                                    name="seeking"
                                    onChange={handleInputChange}
                                    value={edit.seeking}
                                >
                                    <option defaultValue>Seeking</option>
                                    <option value="Band">Band</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Pro">Pro</option>
                                    <option value="Jam">Jam</option>
                                </select>
                                <span className="text-danger">
                                    {errors.seeking
                                        ? errors.seeking.message
                                        : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <textarea
                                    name="bio"
                                    onChange={handleInputChange}
                                    className="form-control"
                                    rows="3"
                                    value={edit.bio}
                                />
                                <span className="text-danger">
                                    {errors.bio ? errors.bio.message : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <input
                                    name="musicLink"
                                    onChange={checkURL}
                                    className="form-control"
                                    value={edit.musicLink}
                                    placeholder="Music Link"
                                />
                                <span className="text-danger">
                                    {errors.musicLink
                                        ? errors.musicLink.message
                                        : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <input
                                    name="userWebsite"
                                    onChange={checkURL}
                                    className="form-control"
                                    value={edit.userWebsite}
                                    placeholder="Website"
                                />
                                <span className="text-danger">
                                    {errors.userWebsite
                                        ? errors.userWebsite.message
                                        : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg col-6 mx-auto shadow mb-5 btnLight"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
