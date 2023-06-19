import React from 'react'
import {FaLocationArrow, FaMoneyBill} from 'react-icons/fa'


const Featured = () => {
  return (
    <div className='container p-5'>
        <h3>Featured Products</h3>
        <div class="row row-cols-1 mb-5 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <div>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                NEW</span>
                                <img src="./assets/mowe.jpeg" class="card-img-top" alt="..."/>
                            </div>
                            
                            <div class="card-body">
                            <h5 class="card-title">Almond County, Mowe</h5>
                            <p class="card-text"> <FaLocationArrow/> Mowe, Ogun</p>
                                <p class="card-text"> <FaMoneyBill/> N3,000,000</p>
                                <a href="#" class="stretched-link">See Property</a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="./assets/mowe.jpeg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                NEW</span>
                            <h5 class="card-title">Almond County, Mowe</h5>
                            <p class="card-text"> <FaLocationArrow/> Mowe, Ogun</p>
                                <p class="card-text"> <FaMoneyBill/> N3,000,000</p>
                                <a href="#" class="stretched-link">See Property</a>
                            </div>
                        
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="./assets/mowe.jpeg" class="card-img-top" alt="..."/>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                NEW</span>
                            <div class="card-body">
                            <h5 class="card-title">Almond County, Mowe</h5>
                            <p class="card-text"> <FaLocationArrow/> Mowe, Ogun</p>
                                <p class="card-text"> <FaMoneyBill/> N3,000,000</p>
                                <a href="#" class="stretched-link">See Property</a>
                            </div>
                        
                        </div>
                    </div>
    

        

            </div>
    </div>
  )
}

export default Featured