/* eslint-disable no-unused-vars */
import  { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import AuthContext from "../../contexts/authContext";
import { loginSchema } from "../../utils/validationSchemas"

import "./Login.css";

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onChange', 
    });

    const onSubmit = async (data) => {
        const result = await loginSubmitHandler(data);
        if (result.success) {
            toast.success('Login successful!');
        } else {
            setLoginError(result.message); 
            toast.error(result.message); 
        }
    };

    return (
        <>
            <Slide direction="right" delay={10} duration={2000} triggerOnce>
                <div className="container1">
                    <input type="checkbox" id="flip" />
                    <div className="cover">
                        <div className="front">
                            <img src="/img/melting-ice-cream-cone.jpg" alt="" />
                            <div className="text">
                                <span className="text-1">
                                    Happy <br />
                                    to see you again!
                                </span>
                            </div>
                        </div>
                        <div className="back">
                            <img className="backImg" src="/img/melting-ice-cream-cone.jpg" alt="" />
                            <div className="text">
                                <span className="text-1">
                                    Complete miles of journey <br />
                                    with one step
                                </span>
                                <span className="text-2">Let&apos;s get started</span>
                            </div>
                        </div>
                    </div>
                    <div className="forms">
                        <div className="form-content">
                            <div className="login-form">
                                <div className="title">Login</div>
                                <form id="login" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-envelope" />
                                            <input
                                                type="text"
                                                id="email"
                                                {...register('email')}
                                                placeholder="Enter your email"
                                                required
                                            />
                                            {errors.email && <p className="error-message">{errors.email.message}</p>}
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock" />
                                            <input
                                                type="password"
                                                id="password"
                                                {...register('password')}
                                                placeholder="Enter your password"
                                                required
                                            />
                                            {errors.password && <p className="error-message">{errors.password.message}</p>}
                                        </div>
                                        <div className="text">
                                            <a href="#">Forgot password?</a>
                                        </div>
                                        <div className="button input-box">
                                            <input type="submit" value="Login" />
                                        </div>
                                        <div className="text sign-up-text">
                                            Don&apos;t have an account?{" "}
                                            <Link to={"/register"}>Register here</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    );
}
