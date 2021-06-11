import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from './components/navbar'
import Home from './components/home';
import Blog from './components/blog';
import NewBlog from './components/newBlog';
import EditBlog from './components/editBlog';
import React from "react";


const Routes = () => {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/blogs/new" component={NewBlog}/>
        <Route exact path="blogs/:id/edit" component={EditBlog} />
        <Route exact path="/blogs/:id" component={Blog}/>;
        <Route exact path="/" component={Home} />

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
