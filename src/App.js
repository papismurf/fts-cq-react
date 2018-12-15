import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBarPage from "./components/NavBarPage";
import FooterPage from  "./components/FooterPage";


import Routes from "./Routes";


class App extends Component {
  render() {
    return (
     <BrowserRouter>
       <div>
         <NavBarPage/>
         <Routes/>
         <FooterPage/>
       </div>
     </BrowserRouter>
    );
  }
}

export default App;
