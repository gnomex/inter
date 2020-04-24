import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">CM Novo Hamburgo</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="PL 92/2019" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </nav>
    )
}

export default Navbar;
