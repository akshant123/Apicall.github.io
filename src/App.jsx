import React from "react";


import { Redirect, Route, Switch } from "react-router-dom";
import PageFirst from "./PageFirst";


import "./index.css";
import PageSecond from "./PageSecond";


const App =()=> {
    return(
        <>
        
        <Switch>
        <Route exact path="/" component={PageFirst} />
        <Route exact path="/pie" component={PageSecond} />
        
        <Redirect to="/" />
            
        </Switch>
        

        </>
    )
};

export default App;