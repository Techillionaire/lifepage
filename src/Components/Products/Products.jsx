import React from 'react'
import Pagination from '../Pagination'
import Navbar from '../Navbar'
import {FaLocationArrow, FaMoneyBill} from 'react-icons/fa'

const Products = () => {
  return (

    <>
        <Navbar/>
        <div className='container p-5 '>

            <h3>Our Products</h3>
            <div class="row row-cols-1 mb-5 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src="../assets/gwagwa.jpeg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Ashford Gwagwalada</h5>
                                <p class="card-text"> <FaLocationArrow/> Gwagwalada, Abuja</p>
                                <p class="card-text"> <FaMoneyBill/> N3,000,000</p>
                                <a href="#" class="stretched-link">See Property</a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../assets/gwagwa.jpeg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Ashford Gwagwalada</h5>
                                <p class="card-text"> <FaLocationArrow/> Gwagwalada, Abuja</p>
                                <p class="card-text"> <FaMoneyBill/> N3,000,000</p>
                                

                                <a href="#" class="stretched-link">See Property</a>
                            </div>
                        
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="../assets/gwagwa.jpeg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Ashford Gwagwalada</h5>
                                <p class="card-text"> <FaLocationArrow/> Gwagwalada, Abuja</p>
                                <p class="card-text"> <FaMoneyBill/> N3,000,000</p>
                                <a href="#" class="stretched-link">See Property</a>
                            </div>
                        
                        </div>
                    </div>
    

        

            </div>
            <Pagination/>
        </div>
    </>
  )
}

export default Products