import React from 'react';
import './App.css';
import {
  Route, Switch, Redirect, HashRouter as Router,
} from 'react-router-dom';
import IntroPage from './pages/IntroPage/IntroPage';
import IntroTest from './pages/IntroTest/IntroTest';
import MainPage from './pages/MainPage/MainPage';
import MainTest from './pages/MainTest/MainTest';
import SummaryPage from './pages/SummaryPage/SummaryPage';
import P2 from './pages/P2/P2';

function App() {


  return (
    <Router>
      <Switch>
        {/* <Route exact path="/main" component={MainPage} /> */}
        <Route exact path="/main" component={MainTest} />
        {/* <Route exact path="/intro" component={IntroPage} /> */}
        <Route exact path="/intro" component={IntroTest} />
        <Route exact path="/summary/:id" component={SummaryPage} />
        <Route exact path="/P2" component={P2} />

        <Redirect exact to="/intro" />
      </Switch>
    </Router>
  );
}

export default App;