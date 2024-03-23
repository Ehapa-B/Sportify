import React from 'react';
import Logo from "../../Logo/Logo"
import { useNavigation } from '../../hooks/useNavigation';
import { CustomButton } from '../../Button';

export const LoginPage = () => {
    const [state, setState] = React.useState (" ")
    const [url, navigate] = useNavigation ()
    return (
        <section>
           <Logo />
           <h1> i am {url} page</h1>
           <CustomButton onClick={()=> navigate('home')}>
              Home
           </CustomButton>
           <CustomButton onClick={()=> navigate('playlist')}>
               Playlist
           </CustomButton>
           <CustomButton onClick={()=> navigate('dashboard')}>
               Dashboard
           </CustomButton>
          <br/>
           <br/>
           <br/>
        </section>
    )
}

