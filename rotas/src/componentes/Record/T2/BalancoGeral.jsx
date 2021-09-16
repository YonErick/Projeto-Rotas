import React from 'react';
import { Link } from 'react-router-dom';

export default function BalancoGeral() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> VOLTAR </Link> </li>
                    <li> <Link to="/record/T2/"> NOTÍCIAS DA CAPITAL </Link></li>
                    <li> <Link to="/record"> NOTÍCIAS DO INTERIOR </Link></li>
                    <li> <Link to="/record"> NOTÍCIAS DE BRASÍLIA </Link></li>
                    <li> <Link to="/record"> NOTÍCIAS DE CULINÁRIA </Link></li>
                </ul>
            </nav>
        </div>
    )
}