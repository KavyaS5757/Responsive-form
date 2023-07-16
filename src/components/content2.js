import React from "react";
import { Nav, NavLink, NavMenu }
	from "./navbarelement";

/*
  import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
  import Home from "./pages/about";
  import About from "./pages/documents";
  import Contact from "./pages/research";
    
  function App() {
    
      return (
          <>
              <BrowserRouter>
                  <div style={{
                      display: "flex",
                      background: 'black',
                      padding: '5px 0 5px 5px',
                      fontSize: '20px'
                  }}>
                      <div style={{ margin: '10px' }}>
                          <NavLink to="/" style={({ isActive }) => ({ 
                              color: isActive ? 'greenyellow' : 'white' })}>
                              About
                          </NavLink>
                      </div>
                      <div style={{ margin: '10px' }}>
                          <NavLink to="/about" style={({ isActive }) => ({ 
                              color: isActive ? 'greenyellow' : 'white' })}>
                              Research
                          </NavLink>
                      </div>
                      <div style={{ margin: '10px' }}>
                          <NavLink to="/contact" style={({ isActive }) => ({ 
                              color: isActive ? 'greenyellow' : 'white' })}>
                              Documents
                          </NavLink>
                      </div>
                  </div>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/about" element={<About />} />
                      <Route exact path="/contact" element={<Contact />} />
                  </Routes>
              </BrowserRouter>
          </>
      );
  }
    
  export default App;
  */

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/research" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/documents" activeStyle>
						Blogs
					</NavLink>
				</NavMenu>
        
			</Nav>
      
		</>
	);
};

export default Navbar;
