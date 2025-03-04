import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await login(email, password);
    //         navigate("/board");
    //     } catch (err) {
    //         alert("Invalid credentials");
    //     }
    // };


    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await axios.post("https://prodiosbackend-1.onrender.com/user/login", { email, password });
            navigate("/board");
        }
        catch(e){
            alert("Invalid credentials");
        }
       
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
