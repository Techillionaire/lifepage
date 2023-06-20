import React from 'react'
import {FaLandmark, FaMoneyBill } from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'
import {GiCash} from 'react-icons/gi'
import { whitesmoke } from '@mui/material/colors'

const Mainpage = () => {



  return (
    <div className='container justiify-content-center'>
        <h3 className='' >Portfolio Overview</h3>
            <div class="row g-4 justify-content-center text-center" >
                <div class="col-6" style={{width: '18rem' }}  >
                    <div class="card h-100" style={{backgroundColor: '#FF8839'}}>
                    <div class="card-body">
                        <FaLandmark class=''  />
                        <h5 class="card-title">Properties Sold</h5>
                        <p class="card-text" style={{color: 'whitesmoke' }}>4</p>
                    </div>
                    </div>
                </div>
                <div class="col-6" style={{width: '18rem' }}>
                    <div class="card h-100" style={{backgroundColor: '#FF8839'}}>
                    <div class="card-body">
                        <RiTeamFill class='' />
                        <h5 class="card-title">Recruits</h5>
                        <p class="card-text" style={{color: 'whitesmoke' }}>25</p>
                    </div>
                    </div>
                </div>
                <div class="col-6" style={{width: '18rem' }}>
                    <div class="card h-100" style={{backgroundColor: '#FF8839'}}>
                    <div class="card-body">
                        <FaMoneyBill class='' />
                        <h5 class="card-title">Commission Overrides</h5>
                        <p class="card-text" style={{color: 'whitesmoke' }}>N3,000,000.00</p>
                    </div>
                    </div>
                </div>
                <div class="col-12" style={{width: '18rem' }}>
                    <div class="card h-100" style={{backgroundColor: '#FF8839'}}>
                    <div class="card-body">
                        <GiCash class='' />
                        <h5 class="card-title">Total Earnings</h5>
                        <p class="card-text" style={{color: 'whitesmoke' }}>N10,000,000.00</p>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Mainpage