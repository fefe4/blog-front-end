import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import menu2 from './assets/images/menu2.png';
import Home from './components/home';
import Blog from './components/blog';
import NewBlog from './components/newBlog';
import React from "react";


const Routes = () => {
  return (
    
    <BrowserRouter>
      <nav>
        <ul className="container d-flex list-unstyled justify-content-between align-items-center">
          <li className="d-flex align-items-center">
            <a><img src={menu2} alt="menu" /></a>
            <a className="m-auto">fefe's blog</a>
          </li>
          <li ><a  href="#aslas"> Log-in & user profile pic</a></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/blogs/new" component={NewBlog}/>
        <Route path="/blogs/:id" component={Blog}/>;
        <Route path="/" component={Home} />
        {/*To-do Route post blog*/} 
        {/*To-do Route edit blog*/} 
        {/*To-do Route delete blog*/}
 
        {/*To-do Route users*/}
        {/*To-do Route users sign up*/}
        {/*To-do Route users Log in*/}
        {/*To-do Route users Log Out*/} 


        {/* <Route path="/profile" component={Profile} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
