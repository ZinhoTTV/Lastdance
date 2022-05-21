import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";



import NavBar from "./componentes/Navbar";
import Principal from "./pages/Principal";
import Aside from "./componentes/Aside";
import Desenvolvedor from "./pages/Desenvolvedor";
import Footer from "./componentes/Footer";
import Contato from "./pages/Contato";
import Header from "./componentes/Header";
import CvCompleto from "./pages/CvCompleto";
import CvResumido from "./pages/CvResumido";


function App() {
    return (
        <BrowserRouter>
            <div id="container">
                <NavBar />
                <Header />
                <Aside />
                 <Switch>
                    <Route path="/" exact>
                        <Principal />
                    </Route>
                    <Route path="/dev">
                        <Desenvolvedor />
                    </Route>
                    <Route path="/contato">
                        <Contato />
                        
                    </Route>
                    <Route path="/CvCompleto">
                        <CvCompleto />
                    </Route>
                    <Route path="/CvResumido">
                        <CvResumido />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    
    );
}

export default App;

