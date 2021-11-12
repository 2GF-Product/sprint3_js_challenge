import React, {useState} from "react";
import axios from 'axios'
import { stripBasename } from "history/PathUtils";


const Login = () => {

    function login(e) {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    
    const validaUser = async() => {
        const res = await axios.get(`http://localhost:3001/user`, {params: {email: setEmail, password: setPassword}})
        .then(response=>{
            return response.data
        })
        .then(response=>{
            if(response.length>0){
                var resposta=response[0]
                console.log(resposta)
            }else{
                alert('User o password incorrect')
            }
        })
        console.log(res)
        // setUsers(response.data);
        console.log(setUsers)
    };
    
     
    
   
    return (

        <form onSubmit={login}>
            <h3>Sign In</h3>
            
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={(e) =>setPassword(e.target.value)} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={validaUser}>Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
}


export default Login
