import './Register.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-toastify/dist/ReactToastify.css';

import AuthContext from '../../contexts/authContext';
import { registerSchema } from '../../utils/validationSchemas';


export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange', 
  });

  const onSubmit = async (data) => {
    try {
      await registerSubmitHandler(data);
      toast.success('Registration successful!');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <Slide direction="left" delay="10" duration="2000" triggerOnce="true">
        <div className="container1">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img src="/img/melting-ice-cream-cone.jpg" alt="" />
              <div className="text">
                <span className="text-1">
                  Every new friend is a <br /> new adventure
                </span>
                <span className="text-2">Let&apos;s get connected</span>
              </div>
            </div>
            <div className="back">
              <img className="backImg" src="/img/melting-ice-cream-cone.jpg" alt="" />
              <div className="text">
                <span className="text-1">
                  Complete miles of journey <br /> with one step
                </span>
                <span className="text-2">Let&apos;s get started</span>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Register</div>
                <form id="register" onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user" />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('username')}
                      />
                      {errors.username && <p className="error-message">{errors.username.message}</p>}
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope" />
                      <input
                        type="text"
                        placeholder="Enter your email"
                        {...register('email')}
                      />
                      {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        {...register('password')}
                      />
                      {errors.password && <p className="error-message">{errors.password.message}</p>}
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        {...register('repassword')}
                      />
                      {errors.repassword && <p className="error-message">{errors.repassword.message}</p>}
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Register" />
                    </div>
                    <div className="text sign-up-text">
                      Already have an account? <Link to="/login">login here</Link>
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
