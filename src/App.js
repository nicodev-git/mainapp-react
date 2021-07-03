/* Importing React Essentials */
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


/* Importing components such as Sidebar */
// import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';


/* Importing components from Pages */
import TopStories from './components/pages/TopStories';
import ForYou from './components/pages/ForYou';
import Following from './components/pages/Following';
import SavedSearch from './components/pages/SavedSearch';
import Pakistan from './components/pages/Pakistan';
import World from './components/pages/World';
import LocalNews from './components/pages/LocalNews';
import Business from './components/pages/Business';
import Technology from './components/pages/Technology';
import Entertainment from './components/pages/Entertainment';
import Sports from './components/pages/Sports';
import Science from './components/pages/Science';
import Health from './components/pages/Health';
import Home from './components/pages/Home';
import Urdu from './components/pages/Urdu';
import About from './components/pages/About';
import Settings from './components/pages/Settings';
import Preferences from './components/pages/Preferences';

/*  Importing components from Auth*/
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

/*  Importing component for Not Found Page*/
import NotFoundPage from './components/NotFoundPage';


const App = () => {
    return(
        <div>
            <Router>
                {/* Added Navbar */}
                <Navbar/>
                {/* Adding Routes of all pages */}
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/foryou' exact component={() => <ForYou authorized = {false}/>}/>
                    <Route path='/topstories' exact component={TopStories}/>
                    <Route path='/following' exact component={Following}/>
                    <Route path='/savedsearches' exact component={SavedSearch}/>
                    <Route path='/pakistan' exact component={Pakistan}/>
                    <Route path='/world' exact component={World}/>
                    <Route path='/localnews' exact component={LocalNews}/>
                    <Route path='/business' exact component={Business}/>
                    <Route path='/technology' exact component={Technology}/>
                    <Route path='/entertainment' exact component={Entertainment}/>
                    <Route path='/sports' exact component={Sports}/>
                    <Route path='/science' exact component={Science}/>
                    <Route path='/health' exact component={Health}/>
                    <Route path='/urdu' exact component={Urdu}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/signup' exact component={Signup}/>
                    <Route path='/about' exact component={About}/>
                    <Route path='/settings' exact component={Settings}/>
                    <Route path='/preferences' exact component={Preferences}/>
                    <Route path='*' exact component={NotFoundPage}/>
                </Switch> 
            </Router>
        </div>
    );
};

export default App;