import React from 'react'



const Register = () => {
  return (
    <div class="container text-center mt-5">
        <div class="row justify-content-center ">
            <div class="col-4 bg-dark shadow">
                <form className='align-items-center m-3 text-white justify-content-center'>
                    <img src="./assets/logo.png" className='w-25 m-3' alt=""/>
                    <div class="row mb-3">
                        {/* <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label> */}
                        <div class="col-sm-10 ms-2">
                            
                        <input type="text" class="form-control" id="inputFirstName" placeholder='First Name'/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        {/* <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label> */}
                        <div class="col-sm-10 ms-2">
                        <input type="text" class="form-control" id="inputLastName" placeholder='Last Name'/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        {/* <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label> */}
                        <div class="col-sm-10 ms-2">
                        <input type="email" class="form-control" id="inputEmail" placeholder='Email'/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        {/* <label for="inputPhoneNumber" class="col-sm-2 col-form-label">Phone Number</label> */}
                        <div class="col-sm-10 ms-2">
                        <input type="tel" class="form-control" id="inputPhoneNumber" placeholder='Phone Number'/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        {/* <label for="inputPassword" class="col-sm-2 col-form-label">Password</label> */}
                        <div class="col-sm-10 ms-2">
                        <input type="password" class="form-control" id="inputPassword" placeholder='Password'/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        {/* <label for="confirmPassword" class="col-sm-2 col-form-label">Confirm Password</label> */}
                        <div class="col-sm-10 ms-2">
                        <input type="password" class="form-control" id="confirmPassword" placeholder='Confirm Password'/>
                        </div>
                    </div>
                    
                    <div class="row mb-3">
                        <div class="col-sm-10 offset-sm-2 ms-2">
                        <div class="form-check text-center">
                            <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label class="form-check-label" for="gridCheck1">
                            I agree to the <a href="#">terms and conditions</a>.
                            </label>
                        </div>
                        </div>
                    </div>
                    <button type="submit" class="btn w-75 btn-primary">Register</button>
                </form>
            </div>
            <div class="col-4 bg-primary text-white shadow">
                <div className="row m-5">
                <h1 className='fs-5'>Register as a partner.</h1>
                </div>
                <div className="row ">
                <p>Already have an account? <a href="#">Login</a> </p>
                </div>
               
               
            </div>
        </div>





       
    </div>
  )
}

export default Register