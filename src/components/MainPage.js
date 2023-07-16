import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";


const MainPage = () => {
  return (
    <React.Fragment>
      <section style={{paddingTop: 5, paddingLeft: 5, paddingRight: 5,paddingBottom:5, backgroundColor:'#0368a1', borderRadius: 4}} >
        <div className="layout text-2xl text-white">
          <div className="content1 centered1">
            <Content1 />
          </div>
          <div className="content2 centered2">
            <Content2 />
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
};

export default MainPage;
