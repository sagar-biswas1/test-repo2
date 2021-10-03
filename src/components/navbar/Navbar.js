import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MyContext } from '../../App';
import './navbar.css'


const Navbar = () => {

const {cart} = useContext(MyContext);


console.log(cart)


    return (
      <div class="">
        <div class='off_canvas'>
          {" "}
          <OffCanvas icon="YOUR_PAPER" />
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
          <div class="container-fluid">
            {/* <NavLink className="navbar-brand" to="/">
           
            </NavLink> */}

            <div></div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink activeClassName="nav-link" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink activeClassName="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink activeClassName="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink activeClassName="nav-link" to="/cart">
                    <i class="bi bi-basket-fill">
                      <span class="mx-3">{cart.length} </span>
                    </i>
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
};



const OffCanvas=({icon})=>{

return (
  <>
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasScrolling"
    >
      {icon}
    </button>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="offcanvas_ul">
          <li>
            <Link class="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  </>
);

}


export default Navbar;