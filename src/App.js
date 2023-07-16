import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import React from "react";
import Navbar from './components/content2';
import { BrowserRouter as Router,Routes, Route, BrowserRouter, useLocation}from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Content1 from "./components/content1";
import Content2 from "./components/content2";
import Content3 from "./components/content3";

import Home from './components/pages/';
import About from './components/pages/about';
import Research from './components/pages/research';
import Documents from './components/pages/documents';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
    

import { Nav, NavLink, NavMenu }
from "./components/navbarelement";

    
    
function App () {
  return (
    <React.Fragment>
      <section style={{paddingTop: 5, paddingLeft: 5, paddingRight: 5,paddingBottom:5, backgroundColor:'#0368a1', borderRadius: 4}} >
        <div className="layout text-2xl text-white">
          <div className="content1 centered1">
            <Content1 />
          </div>
          <div className="content2 centered2">
            <>
          <BrowserRouter>
            <>
            <Nav style={{display: "flex",
                    background: 'black',
                    padding: '5px 5px 5px 5px',
                    fontSize: '20px'}}>
                <NavMenu >
             
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/documents" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/research" activeStyle>
                        Blogs
                    </NavLink>
        
                </NavMenu>
            </Nav>
            </>
                <Routes>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/research" element={<Research />} />
                    <Route exact path="/documents" element={<Documents />} />
                </Routes>
          </BrowserRouter>
            </>
          </div>
          <div className="content3 centered3">
            <div className="container">
              <h4 className="img" style={{color:'black'}}> </h4>

              <div className="content">
                <Content3 />
              </div>
            </div>
            
          </div>

          
        </div>
      </section>
    </React.Fragment>
    
  );
}

export default App;
