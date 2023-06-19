import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {




  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-black">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img src="../assets/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link " to="/products" >Products </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Portfolio
                            </a>
                            <ul className="dropdown-menu ">
                                <li><Link className="dropdown-item" href="#">Recruits</Link></li>
                                <li><Link className="dropdown-item" href="#">Clients</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" href="#">Commissions</Link></li>
                                <li><Link className="dropdown-item" href="#">Sales</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Others
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">Events</Link></li>
                                <li><Link className="dropdown-item" href="#">Media</Link></li>
                                <li><Link className="dropdown-item" href="#">Enquiries</Link></li>
                            </ul>
                        </li>
                    </ul>
                <ul className="navbar-nav ">
                    <li className="nav-item dropstart">
                        <a className='nav-link dropdown-toggle' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-user"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">Profile</Link></li>
                            <li><Link className="dropdown-item" href="#">Log Out</Link></li>
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