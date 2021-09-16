import React from 'react'
import {Link} from 'react-router-dom'

import Titulo from '../Titulo/Titulo.jsx'

import AFaznd from '../Record/T2/AFaznd.jsx'
import BalancoGeral from '../Record/T2/BalancoGeral.jsx'
import CidadeA from '../Record/T2/CidadeA.jsx'
import Falab from '../Record/T2/Falab.jsx'
import RaulGil from '../Record/T2/RaulGil.jsx'
import Home from '../Home/Home.jsx'

import { Route, Switch} from 'react-router'

import './Record.css'

export default function Record() {
    return(
        <div>
            <Titulo texto = 'Record'/> 
            <div className = 'Record'>
                <Switch>
                    <Route exact path = "/home" render = {(props) => <Home/>}></Route>
                    <Route exact path = "/record/T2/falab" render = {(props) => <Falab/>}></Route>
                    <Route exact path = "/record/T2/balancogeral" render = {(props) => <BalancoGeral/>}></Route>
                    <Route exact path = "/record/T2/cidadea" render = {(props) => <CidadeA/>}></Route>
                    <Route exact path = "/record/T2/afaznd" render = {(props) => <AFaznd/>}></Route>
                    <Route exact path = "/record/T2/raulgil" render = {(props) => <RaulGil/>}></Route>
                </Switch>
            </div>
            <div className='menu'>
                <nav className='navMenu'>
                    <ul>
                        <li> <Link to="/"> HOME </Link> </li>
                        <li> <Link to="/record/T2/falab"> Fala Brasil </Link> </li>
                        <li> <Link to="/record/T2/balancogeral"> Balanço Geral </Link> </li>
                        <li> <Link to="/record/T2/cidadea"> Cidade Alerta </Link> </li>
                        <li> <Link to="/record/T2/afaznd"> A Fazendo </Link> </li>
                        <li> <Link to="/record/T2/raulgil"> Raul Gil </Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} 
