import React from "react";
import { Link } from "react-router-dom";


        const SignIn = () => {
        return (
          
            <form > 
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                       {/*  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Rememberme</label>
                         */}
              
                    </div>
                
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
        
                
                 <div class="text-center mt-2">Already have an account?  <Link className="" to="/sign-up">Sign up here</Link></div> 
                 
            </form>
        
        );
    }

    export default SignIn;
