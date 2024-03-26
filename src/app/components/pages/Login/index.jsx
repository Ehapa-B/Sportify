import React from 'react';
import {ReactComponent as SpotifyIcon} from '../../../assets/images/spotify-black.svg'
import { useNavigation } from '../../hooks/useNavigation';
import { CustomButton } from '../../Button';
import { FaApple, FaFacebook } from "react-icons/fa6";
import {ReactComponent as GoogleIcon} from '../../../assets/images/icons/google.svg'
import style from './style.module.css'
import { CustomInput } from '../../Input';

export const LoginPage = () => {
   //  const [state, setState] = React.useState (" ")
    const [url, navigate] = useNavigation ()
    return (
        <section>
           <header className={style.header}>
           <SpotifyIcon/>
           </header>
           <hr />
           <main className={style.main}>
              <CustomButton className={style.facebook} onClick={()=> navigate('home')}>
                <FaFacebook size={'1rem'} /> &nbsp;Continue with Facebook
               </CustomButton>
               <CustomButton onClick={()=> navigate('playlist')}>
                <FaApple />&nbsp; Continue with Apple
               </CustomButton>
              <CustomButton className={style.google} onClick={() => navigate('dashboard')}>
                <GoogleIcon /> &nbsp; Continue with Google
              </CustomButton>
              <br/>
              <br/>
              <br/>
              <div className={style.divider}>
                <span>OR</span>
              </div>

              <CustomInput type="email" placeholder={'Email address or username'} label={'Email address or username'} />
              <CustomInput type="password" placeholder={'Password'} label={'Password'} />
              <a href='/forgot-password' className={style.forgot}>Forgot your password</a>
              <div className={style.flex}>
                <div>
                   <input type='checkbox' />
                    <label>Remember Me</label>
                 </div>
                 <CustomButton className={style.login} onClick={() => navigate('dashboard')}>
                   Log in
                 </CustomButton>
               </div>
              <div className={style.divider}>

              </div>
              <br />
              <p> Don't have an account?</p>
              <CustomButton className={style.google} onClick={() => navigate('dashboard')}>
                 Sign up for spotify
              </CustomButton>
           </main>
        </section>
    )
}
