import React from 'react';

const Navbar = function (props) {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a href="/" className="navbar-brand text-warning">Movies Database</a>

            <div className="navbar-collapse" id="navbarSupportedContent">
                <div className="form-inline ml-auto">
                    <input value={props.query} onChange={props.searchChanged} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={props.searchAction} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;