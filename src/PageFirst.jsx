import React from 'react';
import { NavLink } from 'react-router-dom';
import Table from "./Table";

const PageFirst =() =>{
    return(
        <>
            <h1 className="heading">Welcome to Table</h1>
            <div >
            
            <NavLink to="/pie" className="btn-pro"> Go to Pie </NavLink>
                        
                    </div>
                    <h2 className="heading">You can delete data from Table </h2>

                    <Table/>
        </>
    )
};

export default PageFirst;