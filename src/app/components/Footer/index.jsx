import style from './style.module.css'
import { FaFacebookF, FaInstagram, FaTwitter,  FaGlobeAfrica  } from "react-icons/fa";
import Logo from '../Logo/Logo'
import { aboutMenu, communitiesMenu, usefulLinkMenu, legalUrls } from './data';

export const Footer = () => {
    return (
        <footer className={style.footer}>
           <div className={style.menu}>
             <div className={style.menuItem}>
                 <Logo useWhite/>
                
                 <div className={style.flex}>
                     <Menu title="" options={aboutMenu} />
                     <Menu title="Communities" options={communitiesMenu} />
                     <Menu title="Useful links" options={usefulLinkMenu} />
                   </div>
               </div>
               <div className={style['legal-urls']}>
                  {
                    legalUrls.map(({ url, name }) => <a href={url}>{name}</a>)
                  }
               </div>
           </div>
           <div className={style.copyright}>
              <div className={style.social}>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />

              </div>
              <div>
                 <p> <FaGlobeAfrica  />India (English)</p>
                 <p>© 2023 Spotify AB</p>
              </div>
         </div>
         <div className={style.gototop}>
          <a href='#top-page'>Go to top</a>
         </div>
        </footer>
    )
}

export const Menu = ({title, options}) =>{
    return (
        <nav className={style.nav}>
        <h5>{title || <div>&nbsp;</div>} </h5>
        <ul>
          {
              options && options.map((options)=>{
                return (<li><a href={options.url}>{options.name}</a></li>)
              })
         }

        </ul>
        </nav>
    )
}