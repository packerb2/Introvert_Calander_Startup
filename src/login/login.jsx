import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
          <h1>Welcome to your</h1>
          <h2>
              <font size="7">Spoon-Saving Calander</font>
          </h2>
          <form method="get" action="calander.html">
              <div className="input-group mb-3">
                  <span className="input-group-text">Username: </span>
                  <input className="form-control" type="text" placeholder="Enter Username Here" />
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text">Password: </span>
                  <input className="form-control" type="password" placeholder="Enter Password Here" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="submit" className="btn btn-secondary">Create Account</button>
          </form>
      </div>
    </main>
  );
}