import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory , Link} from "react-router-dom"
import { Button } from "@material-ui/core"



const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/logininterface")
        })
    }

    return (
        <section>
          <div class="box">
          <div class="div">
          <div class="form">
            <h3>Login</h3>
            <form>
            <div class="inputs">
            <input type="email" name = "email" value ={user.email} onChange={handleChange} placeholder="Email Id"/>
            </div>
            <div class="inputs">
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            </div>

            <Button variant="outlined" color="primary" className="log" onClick={login}>Login</Button>
            <div className="or">OR</div>
             <Link to='/register' className='btn-link'  onClick={() => history.push("/register")}>
             <Button variant="outlined" color="secondary" className="sig">Signup</Button>
            </Link>
            <p class="account"> Dont have account<Link to='/register'>SignUp</Link></p>
           </form>
         
            </div> 

            </div>

          </div>
      </section>
    )
}

export default Login