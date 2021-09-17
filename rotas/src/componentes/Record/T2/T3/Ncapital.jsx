import React from 'react'
import {Link} from 'react-router-dom'

import Titulo from '/workspace/Projeto-Rotas/rotas/src/componentes/Titulo/Titulo.jsx'

import Home from '/workspace/Projeto-Rotas/rotas/src/componentes/Home/Home.jsx'

import { Route, Switch} from 'react-router'

import './Ncapital.css'

import BalancoGeral from '../BalancoGeral'

export default function Ncapital() {
    return(
        <div>
            <Titulo texto = 'Notícias capítal'/> 
            <div className = 'Ncapital'>
                <Switch>
                    <Route exact path = "/home" render = {(props) => <Home/>}></Route>
                    <Route exact path = "/record/balancogeral" render = {(props) => <BalancoGeral/>}></Route>
                </Switch>
            </div>
            <div className='menu'>
                <nav className='navMenu'>
                    <ul>
                        <li> <Link to="/"> HOME </Link> </li>
                        <li> <Link to="/record/balancogeral"> VOLTAR </Link> </li>
                        <li> <Link to="#"> Política </Link></li>
                        <li> <Link to="#"> Educação </Link></li>
                        <li> <Link to="#"> Polícia </Link></li>
                        <li> <Link to="#"> Culinária </Link></li>
                        <li> <Link to="#"> Esportes </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} 
