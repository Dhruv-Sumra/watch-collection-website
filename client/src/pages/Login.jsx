import React , {useState}from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const body = {
                email: user.email,
                password: user.password,
            }
            const response = await axios.post(
                "http://localhost:7777/api/auth/login",
                body
            );
            console.log("Response:", response.data);
            navigate("/");
            setSuccess(true);

            let isLogin = true;
            localStorage.setItem(
                "user",
                JSON.stringify({ ...response.data.user, isLogin })
            );
        } catch (err) {
            console.error("Error:", err);
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };
  return (
    <div className={style.log_body}>
     <div className={style.log_section}>
            <div className={style.log_img}>
                <img src="/src/pages/imgs/logimg.png" alt="" />
            </div>

            <div className={style.log}>
                <h2 className={style.log_title}>Login</h2>

                <div className={style.input}>
                  <i class="fa-regular fa-envelope"></i><input type='email' placeholder='Email' className={style.input_log} name='email' value={user.email} onChange={handleChange} />
                  <i class="fa-solid fa-lock"></i> <input type='password' placeholder='Password' className={style.input_log} name='password' value={user.password} onChange={handleChange}/>
                </div>
                
                <div className={style.login_btn}>
                  <button onClick={handleSubmit}>Login</button>
                </div>

            </div>
     </div>
     </div>
  )
}

export default Login