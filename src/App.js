/* Importing React Essentials */
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


/* Importing components such as Sidebar */
import Sidebar from './components/Sidebar/Sidebar';
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

/*  Importing components from Auth*/
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';


const App = () => {
    return(
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/foryou' exact component={ForYou}/>
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
                    <Route path='/login' exact component={Login}/>
                    <Route path='/signup' exact component={Signup}/>
                </Switch> 
            </Router>
        </div>
    );
};

export default App;