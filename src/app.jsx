import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div  className="bg-dark text-light">
        <header className="container-fluid">
            <nav className="nabbar navbar-dark">
                <font size="6"><a class="navbar-brand" href="#">Spoon Saver Calander</a></font>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="login.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="calander.html">View Calander</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="analysis.html">Spoon Analysis</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
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
  );
}