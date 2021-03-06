import React from 'react'
import './App.css';

import Home from '../Home/Home.jsx'
import Header from '../Header/Header.jsx'
import Band from '../Band/Band.jsx'
import Cultura from '../Cultura/Cultura.jsx'
import Globo from '../Globo/Globo.jsx'
import Record from '../Record/Record.jsx'
import BalancoGeral from '../Record/T2/BalancoGeral'
import Ncapital from '../Record/T2/T3/Ncapital'
import Sbt from '../Sbt/Sbt.jsx'

import { Route, Switch} from 'react-router'

function App() {
  return (
    <div>
 
      <Header />
      
      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Home/>}></Route>
          <Route exact path = "/band" render = {(props) => <Band/>}></Route>
          <Route exact path = "/cultura" render = {(props) => <Cultura/>}></Route>
          <Route exact path = "/globo" render = {(props) => <Globo/>}></Route>
          <Route exact path = "/record" render = {(props) => <Record/>}></Route>
          <Route exact path = "/record/balancogeral" render = {(props) => <BalancoGeral/>}></Route>
          <Route exact path = "/record/balancogeral/ncapital" render = {(props) => <Ncapital/>}></Route>
          <Route exact path = "/sbt" render = {(props) => <Sbt/>}></Route>
        </Switch>

      </main>
      
    </div>
  );
}

export default App;
