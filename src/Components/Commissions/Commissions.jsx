import React from 'react'
import {FaPlus, FaSearch} from 'react-icons/fa'
import Pagination from '../Pagination'
import Navbar from '../Navbar'

const Commissions = () => {
  return (
    <>
    <Navbar/>
<div className="container">
    
    <div className='my-5'>
        <div className="d-flex justify-content-between">
            {/* <a class="btn btn-primary" href="#" role="button" style={{backgroundColor:'#FF8839', border:'0px'}} ><FaPlus className='align-self-center'/> New Recruit</a> */}
            <form class="d-flex " role="search">
                <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                <FaSearch type='submit' className='align-self-center' style={{fontSize:'24px'}} />
                {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            </form>
        </div>
    

    <h5 className='my-3' >3 Commissions</h5>
    <table class="table  table-hover table-striped table-light">
        <thead>
            <tr>
            <th scope="col">Description</th>
            <th scope="col" className='d-none d-md-table-cell'>Name</th>
            <th scope="col" className='d-none d-md-table-cell'>Reference</th>
            <th scope="col" className='d-none d-md-table-cell'>Sale/Payment Value</th>
            <th scope="col">Commission(-7% Tax)</th>
            <th scope="col">Status</th>
            <th scope="col" className='d-none d-md-table-cell'>Commission Type</th>
            <th scope="col" className='d-none d-md-table-cell'>Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Payment on sale: 1.00 VALU PLOTS at RICHLAND EPE (Ketu-Epe)</td>
            <td className='d-none d-md-table-cell'>Mr Jonathan</td>
            <td className='d-none d-md-table-cell'>69K86357Y9-0023</td>
            <td className='d-none d-md-table-cell'>N750,000.00</td>
            <td className=''>N74,812.50</td>
            <td className='text-success' >Paid</td>
            <td className='d-none d-md-table-cell'>Direct sales</td>
            <td className='d-none d-md-table-cell'>June 19, 2023</td>
            </tr>
            <tr>
            <td>Payment on sale: 1.00 VALU PLOTS at RICHLAND EPE (Ketu-Epe)</td>
            <td className='d-none d-md-table-cell'>Mr Jonathan</td>
            <td className='d-none d-md-table-cell'>69K86357Y9-0023</td>
            <td className='d-none d-md-table-cell'>N750,000.00</td>
            <td className=''>N74,812.50</td>
            <td className='text-danger' >Unpaid</td>
            <td className='d-none d-md-table-cell'>Direct sales</td>
            <td className='d-none d-md-table-cell'>June 19, 2023</td>
            </tr>
            <tr>
            <td>Payment on sale: 1.00 VALU PLOTS at RICHLAND EPE (Ketu-Epe)</td>
            <td className='d-none d-md-table-cell'>Mr Jonathan</td>
            <td className='d-none d-md-table-cell'>69K86357Y9-0023</td>
            <td className='d-none d-md-table-cell'>N750,000.00</td>
            <td className=''>N74,812.50</td>
            <td className='text-success' >Paid</td>
            <td className='d-none d-md-table-cell'>Direct sales</td>
            <td className='d-none d-md-table-cell'>June 19, 2023</td>
            </tr>
        </tbody>
    </table>
    <Pagination/>
    </div>
</div>
</>
  )
}

export default Commissions