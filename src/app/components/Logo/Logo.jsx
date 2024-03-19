// import spotify from '../assets/images/spotify.svg';
import spotify from '../../assets/images/spotify.svg';
import {ReactComponent as spotifyb} from '../../assets/images/spotifyb.svg';
import style from './style.module.css'

export function Logo(props) {
  const myImage = props.useWhite ? spotify : spotifyb
    return (
        <a href='#/dashboard' className={style.logo}>
          <img src= {myImage} />
        </a>
    )
    
}

export function NavigationLogoText (){
  return (<h1>spotify</h1>)
}

export default Logo