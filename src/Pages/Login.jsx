import React from 'react'

const Login = () => {
  return (
    <div class="container text-center m-5">
        <div class="row justify-content-center ">
            <div class="col-4 bg-primary text-white shadow">
                <div className="row m-5">
                <h1 className='fs-5'>Welcome back!</h1>
                </div>
                <div className="row ">
                <p>Don't have an account? <a href="#">Register now</a> </p>
                </div>
               
               
            </div>
            <div class="col-4 bg-dark  shadow">
                <form className='align-items-center m-5 text-white justify-content-center'>
                    <img src="./assets/logo.png" className='w-25 m-5' alt=""/>
                    <div class="row mb-3">
                        {/* <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label> */}
                        <div class="col-sm-10 ms-2">
                        <input type="email" class="form-control" id="inputEmail" placeholder='Email'/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        {/* <label for="inputPassword" class="col-sm-2 col-form-label">Password</label> */}
                        <div class="col-sm-10 ms-2">
                        <input type="password" class="form-control" id="inputPassword" placeholder='Password'/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-8 offset-sm-2 ms-2">
                        <div class="form-check text-center">
                            <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label class="form-check-label" for="gridCheck1">
                           Remember me
                            </label>
                        </div>
                        </div>

                    </div>
                    
                    <button type="submit" class="btn w-75 btn-primary m-3">Register</button>

                    <div class="row mb-3">

                        <div class="col-sm-8 ms-5 offset-sm-2 ">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>





       
    </div>
  )
}

export default Login