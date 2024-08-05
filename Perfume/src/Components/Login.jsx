import React from 'react';
import './Login.css';
import video from '../assets/pern2.mp4';
import image from '../assets/b.png';
import { IonIcon } from '@ionic/react';
import { mailSharp, lockClosedSharp } from 'ionicons/icons';

const Login = () => {

  return (
    <div>
      <section>
        <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.  
        </video>
        <img src={image} alt="Logo" className="logo" />
        <div className="login-box">
          <form>
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
                <IonIcon icon={mailSharp} />
              </span>
              <input type="email" required /> 
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <IonIcon icon={lockClosedSharp} />
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" />Remember Me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className='bt'>Login</button>
            <div className="register">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
