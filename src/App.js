/* Importing React Essentials */
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


/* Importing components such as Sidebar */
import Sidebar from './components/Sidebar/Sidebar';


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


const App = () => {
    return(
        <div>
            <Router>
                <Sidebar/>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="/foryou">
                        <ForYou/>
                    </Route>
                    <Route path="/topstories">
                        <TopStories/>
                    </Route>
                    <Route path="/following">
                        <Following/>
                    </Route>
                    <Route path="/savedsearches">
                        <SavedSearch/>
                    </Route>
                    <Route path="/pakistan">
                        <Pakistan/>
                    </Route>
                    <Route path="/world">
                        <World/>
                    </Route><Route path="/localnews">
                        <LocalNews/>
                    </Route>
                    <Route path="/business">
                        <Business/>
                    </Route>
                    <Route path="/technology">
                        <Technology/>
                    </Route>
                    <Route path="/entertainment">
                        <Entertainment/>
                    </Route>
                    <Route path="/sports">
                        <Sports/>
                    </Route>
                    <Route path="/science">
                        <Science/>
                    </Route>
                    <Route path="/health">
                        <Health/>
                    </Route>
                </Switch> 
            </Router>
        </div>
    );
};

export default App;