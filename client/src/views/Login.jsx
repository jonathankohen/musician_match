import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialLogin = {
  email: "",
  password: "",
};

export default function Login({ setUser }) {
  const [log, setLog] = useState(initialLogin);
  const [errors] = useState(initialLogin);
  const history = useHistory();

  const handleInputChange = (e) => {
    setLog({
      ...log,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", log, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.user) {
          setUser(res.data.user);
          // localStorage.setItem('savedUser', res.data.user);
          // localStorage.setItem(
          //     'savedUserSeeking',
          //     res.data.user.seeking
          // );
          history.push("/users");
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <div
            className="jumbotron jumbotron-image shadow text-white animate__animated animate__fadeIn"
            id="loginJumbo"
          >
            <h1 className="display-1 lead textShadow">
              <strong>Come join us!</strong>
            </h1>
            <h1 className="display-3 textShadow">Find your</h1>
            <h1 className="display-4 textShadow">passion.</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1 className="display-3 font-weight-bolder text-center mb-3 mt-5 text-light text-underline textShadow animate__animated animate__fadeInLeftBig">
            Login
          </h1>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col mx-auto">
          <form
            onSubmit={handleSubmit}
            className="col-sm-12 col-md-6 col-lg-3 mx-auto animate__animated animate__fadeInLeftBig"
          >
            <div className="row mb-2">
              <div className="col">
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  onChange={handleInputChange}
                  value={log.email}
                />
                <span className="text-danger">
                  {errors.email ? errors.email.message : ""}
                </span>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col">
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="form-control"
                  onChange={handleInputChange}
                  value={log.password}
                />
                <span className="text-danger">
                  {errors.password ? errors.password.message : ""}
                </span>
              </div>
            </div>

            <div className="row mt-3 mb-5">
              <button
                type="submit"
                className="btn btn-primary col-6 mx-auto btnLight"
                id="regBtn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
