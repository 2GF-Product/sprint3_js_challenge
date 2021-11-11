import React, {useState, useEffect} from "react";
import axios from 'axios'


const Login = () => {

    const [users, setUsers] = useState([]);
    const [values, setValues] = useState([]);

    
    const getUsers = async() => {
        const res = await axios.get(`http://localhost:3001/user`)
        console.log(res)
        setUsers(res.data);
    };
    getUsers()
    
    function onChange(event) {
        const {value, name} = event.target
        setValues({
            ...values,
            [name]: value,
        });
    }
    
   
    return (

        <form>
            <h3>Sign In</h3>
            
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={onChange} values={values.email}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={onChange} values={values.password} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
}


export default Login
