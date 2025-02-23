import React, { Component } from 'react'
import './navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <div>
       
      
{/* background image */}
<div className="background">
  
  <span className="bgimage"></span>
       <nav className="navbar body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src="reactlogo.png" alt="ReAct"/>
    </a>
    <div className='listitems'>
      <ul>
   <li><a href="/">Home</a></li>
    <li><a href="/">Dashboard</a></li>
    <li><a href="/">Contact us</a></li>
    <li><a href="/">Help</a></li>
    </ul>
    <div className="searchbox">   <input type="text" placeholder='Search abput react app' /> <button>Search</button></div>
       
        </div>
       
</div>

</nav>

</div>     
      </div>
  
    )
  }
}
