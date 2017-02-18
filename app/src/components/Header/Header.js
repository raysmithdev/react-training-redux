import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = () => (
  <div className="Header">
    <img src={logo} className="Logo" alt="logo" />
    <h2 className="Title">Welcome to React Training</h2>
    <p className="Sub-Title">Areas covered in this workshop</p>
    <ul>
      <li>Stateful vs stateless components</li>
      <li>Components in components</li>
      <li>Props & state</li>
      <li>Communicating between components</li>
      <li>Lifecycle methods</li>
      <li>Refs</li>
      <li>Children</li>
    </ul>
  </div>
);

export default Header;
