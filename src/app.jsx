import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Calander } from './calander/calander';
import { Analysis } from './analysis/analysis';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
        <div  className="bg-dark text-light">
            <header className="container-fluid">
                <nav className="nabbar navbar-dark">
                    <font size="6"><a class="navbar-brand" href="#">Spoon Saver Calander</a></font>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to=''>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='calander'>View Calander</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='analysis'>Spoon Analysis</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='about'>About</NavLink>
                        </li>
                    </menu>
                </nav>
            </header>

        <main>App components go here</main>

            <footer className="bg-dark text-white-50">
                <div className="container-fluid">
                    <hr />
                    <span className="text-rest">Website created by Packer Barlow</span>
                    <a className="text-reset" href="https://github.com/packerb2/Introvert_Calander_Startup.git">My GitHub</a>
                    </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}