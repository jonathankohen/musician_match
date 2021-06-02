import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Reg from './views/Reg';
import Main from './views/Main';
import Login from './views/Login';
import About from './views/About';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
    const [user, setUser] = useState();

    return (
        <div className="App">
            <Router>
                <Navbar user={user} setUser={setUser} />
                <Switch>
                    <Route exact path="/">
                        <Reg setUser={setUser} />
                    </Route>
                    <Route path="/login">
                        <Login setUser={setUser} />
                    </Route>
                    <Route path="/users">
                        <Main user={user} />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/user/:id">
                        <Show />
                    </Route>
                    <Route path="/edit/:id">
                        <Edit user={user} />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
