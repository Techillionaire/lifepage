import React from 'react'

const Navbar = () => {




  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-black">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-primary" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item" href="#">Lands</a></li>
                                <li><a className="dropdown-item" href="#">Housing</a></li>
                                <li><a className="dropdown-item" href="#">Investments</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Portfolio
                            </a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item" href="#">Recruits</a></li>
                                <li><a className="dropdown-item" href="#">Clients</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Commissions</a></li>
                                <li><a className="dropdown-item" href="#">Sales</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Others
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Events</a></li>
                                <li><a className="dropdown-item" href="#">Media</a></li>
                                <li><a className="dropdown-item" href="#">Enquiries</a></li>
                            </ul>
                        </li>
                    </ul>
                <ul className="navbar-nav ">
                    <li className="nav-item dropstart">
                        <a className='nav-link dropdown-toggle' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-user"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Log Out</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar