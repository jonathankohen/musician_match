import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import RegFormFrag from '../components/RegFormFrag';
// import guitars from '../images/guitars.jpeg';

const Reg = props => {
    const { setUser } = props;

    const history = useHistory();

    const initialReg = {
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

    const [reg, setReg] = useState(initialReg);
    const [errors, setErrors] = useState(initialReg);
    const [multi, setMulti] = useState('');

    const handleInputChange = e => {
        setReg({
            ...reg,
            [e.target.name]: e.target.value,
        });
    };

    const handleChange = e => {
        setMulti(e.target.value);
    };

    const checkURL = e => {
        let string = e.target.value;
        if (!string.match(/^https?:/) && string.length) {
            string = 'https://' + string;
            e.target.value = string;
        }
        setReg({
            ...reg,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/register', reg, {
                withCredentials: true,
            })
            .then(res => {
                if (res.data.user) {
                    setUser(res.data.user);
                    localStorage.setItem('savedUser', res.data.user);
                    localStorage.setItem(
                        'savedUserSeeking',
                        res.data.user.seeking
                    );
                    history.push('/users');
                } else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        // TODO: separate button to register as a teacher or pro. separate schemas? or render different page?
        <div className="container">
            <div
                className="jumbotron shadow-lg animate__animated animate__fadeInDown mt-5"
                id="landing_hero"
            >
                <h1 className="display-3 font-weight-bolder textShadowSm">
                    Musician Match.
                </h1>
                <p className="lead">
                    Whether you're searching for band members, a lesson teacher,
                    professionals to hire, or just people to jam with,{' '}
                    <em>
                        <strong>Musician Match</strong>
                    </em>{' '}
                    connects you with your ideal collaborator based on mutual
                    influences, goals, and location.
                </p>
                <hr className="my-2" />
                <p>
                    Register below to get access to our growing database of
                    musicians. Upload recordings, video, and pictures to share
                    with potential connections!
                </p>
                <Link
                    to="/about"
                    className="btn btn-primary btn-lg shadow btnLight"
                >
                    Learn More
                </Link>
            </div>

            <div className="row">
                <div className="col animate__animated animate__fadeInUp">
                    <h1 className="display-4 font-weight-bolder text-center my-5 text-light text-underline textShadow">
                        Register:
                    </h1>
                    <form onSubmit={handleSubmit} className="col-sm-5 mx-auto">
                        <div className="row mb-2">
                            <div className="col">
                                <input
                                    name="firstName"
                                    placeholder="First Name"
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
                                    placeholder="Last Name"
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
                            <div className="col-sm">
                                <input
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    className="form-control shadow"
                                    onChange={handleInputChange}
                                />
                                <span className="text-danger">
                                    {errors.email ? errors.email.message : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <input
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    className="form-control shadow"
                                    onChange={handleInputChange}
                                />
                                <span className="text-danger">
                                    {errors.password
                                        ? errors.password.message
                                        : ''}
                                </span>
                            </div>
                            <div className="col">
                                <input
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    type="password"
                                    className="form-control shadow"
                                    onChange={handleInputChange}
                                />
                                <span className="text-danger">
                                    {errors.confirmPassword
                                        ? errors.confirmPassword.message
                                        : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <input
                                    name="city"
                                    placeholder="City"
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
                                    value={reg.state}
                                >
                                    <option defaultValue>State</option>
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
                                    <option value="OR">Oregon</option>
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
                            <div className="col-sm">
                                <input
                                    name="zip"
                                    placeholder="Zip Code"
                                    type="text"
                                    className="form-control shadow"
                                    onChange={handleInputChange}
                                />
                                <span className="text-danger">
                                    {errors.zip ? errors.zip.message : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col">
                                <input
                                    name="musicLink"
                                    placeholder="Link to your music (optional)"
                                    type="url"
                                    className="form-control shadow"
                                    onChange={checkURL}
                                    value={reg.musicLink}
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
                                    placeholder="Website (optional)"
                                    type="url"
                                    className="form-control shadow"
                                    onChange={checkURL}
                                />
                                <span className="text-danger">
                                    {errors.userWebsite
                                        ? errors.userWebsite.message
                                        : ''}
                                </span>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-sm">
                                <select
                                    className="custom-select text-muted"
                                    name="priInst"
                                    onChange={handleInputChange}
                                    value={reg.priInst}
                                >
                                    <option defaultValue>
                                        Primary Instrument
                                    </option>
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

                        <div className="row mb-2 text-muted">
                            <div className="col-sm">
                                <select
                                    className="custom-select"
                                    value={multi}
                                    onChange={handleChange}
                                >
                                    <option defaultValue="query">
                                        Do you play more than one instrument?
                                    </option>
                                    <option value="yes">Yes!</option>
                                    <option value="no">Nope</option>
                                </select>
                            </div>
                        </div>

                        {multi === 'yes' ? (
                            <>
                                <div className="row mb-2">
                                    <div className="col-sm">
                                        <select
                                            className="custom-select font-weight-bold secText"
                                            name="secInst"
                                            onChange={handleInputChange}
                                            value={reg.secInst}
                                            id="secText"
                                        >
                                            <option defaultValue>
                                                Please Select a Secondary
                                                Instrument!
                                            </option>
                                            <option value="Guitar">
                                                Guitar
                                            </option>
                                            <option value="Drums">Drums</option>
                                            <option value="Bass">Bass</option>
                                            <option value="Vocals">
                                                Vocals
                                            </option>
                                            <option value="synth">Synth</option>
                                        </select>
                                        <span className="text-danger">
                                            {errors.secInst
                                                ? errors.secInst.message
                                                : ''}
                                        </span>
                                    </div>
                                </div>

                                <RegFormFrag
                                    msg="Awesome!"
                                    bio={reg.bio}
                                    errors={errors}
                                    seeking={reg.seeking}
                                    handleInputChange={handleInputChange}
                                />
                            </>
                        ) : (
                            ''
                        )}

                        {multi === 'no' ? (
                            <RegFormFrag
                                msg="No worries!"
                                bio={reg.bio}
                                errors={errors}
                                seeking={reg.seeking}
                                handleInputChange={handleInputChange}
                            />
                        ) : (
                            ''
                        )}

                        <div className="row mt-3 mb-5">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg col-6 col-md-8 col-lg-6 mx-auto shadow mb-5 btnLight"
                            >
                                Join Database
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reg;
