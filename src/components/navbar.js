import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand">CM Novo Hamburgo</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="PL 92/2019" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </nav>
    )
}

export default Navbar;