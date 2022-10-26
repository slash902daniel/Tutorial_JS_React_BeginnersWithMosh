import React, {Component} from "react";

//stateless Functional Component, as it does only receive from props.
//so rather than a class we will use a function 
//ofter used by devs when simple is needed
//note that we need to add props as arg, and remove "this"

//Further we can remove the props. by destructuring the call to extract the variable used ({totalCounters})

const NavBar = ({totalCounters}) => {
    console.log('navBar - Render'); //Cannot use lifecicle hooks on statelss function components
    
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;