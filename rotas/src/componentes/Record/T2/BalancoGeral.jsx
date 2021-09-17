import React from 'react'
import {Link} from 'react-router-dom'

import Titulo from '/workspace/Projeto-Rotas/rotas/src/componentes/Titulo/Titulo.jsx'

import Ninterior from './T3/Ninterior'
import Nculinaria from './T3/Nculinaria'
import Ncapital from './T3/Ncapital'
import Nbrasilia from './T3/Nbrasilia'

import Home from '/workspace/Projeto-Rotas/rotas/src/componentes/Home/Home.jsx'

import { Route, Switch} from 'react-router'

import './BalancoGeral.css'

export default function BalancoGeral() {
    return(
        <div>
            <Titulo texto = 'Balanço Geral'/> 
            <div className = 'BalancoGeral'>
                <Switch>
                    <Route exact path = "/home" render = {(props) => <Home/>}></Route>
                    <Route exact path = "/record/record" render = {(props) => <record/>}></Route>
                    <Route exact path = "/record/t2/t3/ncapital" render = {(props) => <Ncapital/>}></Route>
                    <Route exact path = "/record/t2/t3/ninterior" render = {(props) => <Ninterior/>}></Route>
                    <Route exact path = "/record/t2/t3/nbrasilia" render = {(props) => <Nbrasilia/>}></Route>
                    <Route exact path = "/record/t2/t3/nculinaria" render = {(props) => <Nculinaria/>}></Route>
                </Switch>
            </div>
            <div className='menu'>
                <nav className='navMenu'>
                    <ul>
                        <li> <Link to="/"> HOME </Link> </li>
                        <li> <Link to="/record"> VOLTAR </Link> </li>
                        <li> <Link to="/record/balancogeral/ncapital"> NOTÍCIAS DA CAPITAL </Link></li>
                        <li> <Link to="#"> NOTÍCIAS DO INTERIOR </Link></li>
                        <li> <Link to="#"> NOTÍCIAS DE BRASÍLIA </Link></li>
                        <li> <Link to="#"> NOTÍCIAS DE CULINÁRIA </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} 
