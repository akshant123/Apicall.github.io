import React from 'react';
import { NavLink } from 'react-router-dom';
import Appp from './Appp';

const PageSecond =() =>{
    return(
        <>
            <h1 className="heading">Welcome to Pie Chart</h1>
            <div>
            
                       <NavLink to="/" className="btn-pro"> Go to Table </NavLink>
                        
                    </div>
                    <Appp/>
        </>
    )
};

export default PageSecond;