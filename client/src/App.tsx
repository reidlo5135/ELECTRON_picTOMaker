import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
// @ts-ignore
import {AnimatePresence} from 'framer-motion';
import Main from "./page/MainPage/Main";

export default function App() {
  return (
    <div className="App">
      <AnimatePresence>
          <Switch>
              <Route exact path='/' component={Main} />
          </Switch>
      </AnimatePresence>
    </div>
  );
};
