import React from 'react';
import {Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profile/velopert">velp 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/kmc">km 프로필</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path={['/about','/info']} component={About} />
            <Route path="/profile/:usernm" component={Profile} />
        </div>
    )
}

export default App;
