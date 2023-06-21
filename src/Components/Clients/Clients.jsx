import React from 'react'
import {FaPlus, FaSearch} from 'react-icons/fa'
import Pagination from '../Pagination'
import Navbar from '../Navbar'

const Clients = () => {
  return (
    <>
        <Navbar/>
    <div className="container">
        
        <div className='my-5'>
            <div className="d-flex justify-content-between">
                <a class="btn btn-primary" href="#" role="button" style={{backgroundColor:'#FF8839', border:'0px'}} ><FaPlus className='align-self-center'/> New Client</a>
                <form class="d-flex " role="search">
                    <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                    <FaSearch type='submit' className='align-self-center' style={{fontSize:'24px'}} />
                    {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
        

        <h5 className='my-3' >3 Clients</h5>
        <table class="table  table-hover table-striped table-light">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col" className='d-none d-md-block' >Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Reference</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mr Jonathan</td>
                <td className='d-none d-md-block'>Jonathanjotham@gmail.com</td>
                <td>090xxxxxxxx</td>
                <td>ABCD1234</td>
                </tr>
                <tr>
                <td>Juwon Omoboye</td>
                <td className='d-none d-md-block'>juwonomoboye@gmail.com</td>
                <td>080xxxxxxxx</td>
                <td>ABCD1234</td>
                </tr>
                <tr>
                <td>Tony Njoku</td>
                <td className='d-none d-md-block'>Tonynjoku@gmail.com</td>
                <td>080xxxxxxxx</td>
                <td>ABCD1234</td>
                </tr>
            </tbody>
        </table>
        <Pagination/>
        </div>
    </div>
    </>
  )
}

export default Clients