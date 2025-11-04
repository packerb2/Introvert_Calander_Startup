import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Calander } from './calander/calander';
import { Analysis } from './analysis/analysis';
import { About } from './about/about';
import { AuthState } from './login/authState'

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
        <div  className="body text-light">
            <header className="container-fluid">
                <nav className="nabbar navbar-dark">
                    <font size="6"><a className="navbar-brand" href="#">Spoon Saver Calander</a></font>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to=''>Home</NavLink>
                        </li>
                        {authState === AuthState.Authenticated && (
                          <li className="nav-item">
                              <NavLink className='nav-link' to='calander'>View Calander</NavLink>
                          </li>
                        )}
                        {authState === AuthState.Authenticated && (
                          <li className="nav-item">
                              <NavLink className='nav-link' to='analysis'>Spoon Analysis</NavLink>
                          </li>
                        )}
                        <li className="nav-item">
                            <NavLink className='nav-link' to='about'>About</NavLink>
                        </li>
                    </menu>
                </nav>
            </header>

        <Routes>
            <Route
              path='/'
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                  }}
                />
              }
            exact
          />
            <Route path='/calander' element={<Calander />} />
            <Route path='/analysis' element={<Analysis />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

            <footer className="text-white-50">
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

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}
