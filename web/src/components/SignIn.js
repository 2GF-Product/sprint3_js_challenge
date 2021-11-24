import React, { useState } from 'react';
import { Link } from "react-router-dom";




const SignIn = () => {
    const [formFields, setFormFields] = useState({ email: "", password: "" });
    const [formErrors,setFormErrors]=useState({ email: "", password: "" });


    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );


    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...formFields };

        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

      /*   setFormFields({ formErrors, [formFields]: value }); */
        setFormFields(prevState => { return { ...prevState, [formFields]: value} } );
        setFormErrors(formErrors);

        console.log(formErrors)
    }

    return (

        <form noValidate >
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email"
                 className="form-control "
                    placeholder="Enter email"
                    name="email"
                    noValidate
                    onChange={handleChange}

                />
                  {
                <span className="errorMessage">{formErrors.email}</span>
              }



            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password"
                    className="form-control "
                    placeholder="Enter password"
                    name="password"
                    noValidate
                    onChange={handleChange}

                />
               {
                <span className="errorMessage">{formErrors.password}</span>}
        {/*    {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>)} */}

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
