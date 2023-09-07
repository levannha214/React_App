
import Hinhnen1 from '../accsets/anhnen1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/login.css';
import { validateUser, validateUserPassword } from '../validate/validate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginApi } from '../api/service';
const Login = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [showPass, setShowPass] = useState({ stastu: false, type: 'password' });
    const navigate = useNavigate();
    const checkLogin = async (user, pass) => {
        try {
            let res = await LoginApi(user, pass).then(res => {
                if (res.status === 200) {
                    localStorage.setItem("token", res.data.access_token);
                    navigate('/user_management');
                } else {
                    setPass("");
                    setUser("");
                    toastify('Incorrect username or password !');
                }
            });
        } catch (e) {
            setPass("");
            setUser("");
            toastify('Incorrect username or password !');
        }
    }
    const CheckAccount = () => {
        if (validateUser(user)) {
            toastify(validateUser(user));
        } else if (validateUserPassword(pass)) {
            toastify(validateUserPassword(pass));
        } else {
            checkLogin(user, pass);
        }
    }
    const toastify = (validate) => toast.error(validate, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const ShowPassword = () => {
        if (showPass.stastu) {
            setShowPass({ stastu: false, type: 'password' });
        } else {
            setShowPass({ stastu: true, type: 'text' })
        }
    }
    return (
        <div className="LoginUser col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex justify-content-center" style={{
            backgroundImage: `url(${Hinhnen1})`,
            backgroundSize: 'cover'
        }} >
            <ToastContainer />
            <div className=' col-10 col-sm-8  col-md-6 col-xl-5 col-xxl-5 col-lg-5 py-3'>

                <div className='my-3 col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex justify-content-center'><h1 className='Galassy'>Galassy Login From</h1></div>
                <div className='py-3 col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12 formLogin'>
                    <div className='col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12  d-flex justify-content-center'><strong><p className='text-white'>Bill out the from below to login</p></strong></div>
                    <div className='p-2 col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex justify-content-center '>
                        <div className=' col-10 col-sm-10  col-md-10 col-xl-10 col-xxl-10 col-lg-10 inputLogin d-flex'>

                            <input className='mx-5 col-7 col-sm-8 col-md-8 col-xl-8 col-xxl-8 col-lg-8' type='text' id="user" value={user} onChange={e => setUser(e.target.value)} placeholder='Username'></input>
                            <label htmlFor="user"><span className="text-white material-symbols-outlined ">
                                person
                            </span></label>
                        </div>
                    </div>
                    <div className='p-2 col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex justify-content-center '>
                        <div className=' col-10 col-sm-10  col-md-10 col-xl-10 col-xxl-10 col-lg-10 inputLogin d-flex'>

                            <input className='mx-5 col-7 col-sm-8 col-md-8 col-xl-8 col-xxl-8 col-lg-8' type={showPass.type} id="pass" onChange={e => setPass(e.target.value)} placeholder='Password'></input>
                            <label htmlFor="pass" onClick={ShowPassword}><span className="text-white material-symbols-outlined ">
                                lock
                            </span></label>
                        </div>
                    </div>
                    <div className='p-2 col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex justify-content-center '>
                        <div className=' col-10 col-sm-10  col-md-10 col-xl-10 col-xxl-10 col-lg-10  d-flex justify-content-between'>
                            <label className='text-white' htmlFor="check"><input type='checkbox' /> Remember Me</label>
                            <p className='text-white'>Forgot Password</p>
                        </div>
                    </div>
                    <div className='p-2 col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex justify-content-center '>
                        <button className='text-white' id="buttonLogin" onClick={CheckAccount}><strong>Login</strong></button>
                    </div>
                </div>
                <div className='my-4 col-12 col-sm-12  col-md-12 col-xl-12 col-xxl-12 col-lg-12 d-flex justify-content-center'><p className='text-white'> @ 2023 Galassy Login From. Design by <i className='text-info'>w3layouts</i></p></div>
            </div>

        </div>
    );
}
export default Login;
