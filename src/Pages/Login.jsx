import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    
    const location=useLocation()
    const naviget=useNavigate()
    const from=location.state?.from.pathname || "/"
    console.log(location)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handelForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
            .then(() => { 
                naviget(from,{replace:true})
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handelCaptchaValue = (e) => {
        const currentCaptchaValue = e.target.value
        if (validateCaptcha(currentCaptchaValue)) {
            setDisabled(false)
        }
        console.log(currentCaptchaValue)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handelCaptchaValue} name="captch" placeholder="Type Captch Code" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='m-3'>Are You New Bistro Boss? <Link to="/register">Register</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;