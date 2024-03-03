import './LandingPage.css'
import { Component } from 'react'
import {Logo} from './logo'

//the below code is the same thin with the class and both works

export const LandingPageHeader = () => {
    return (<header className = "header">
          <div className ="logo">
              <Logo />
          </div>
          <div className ="menu">
             <ul>
               <li>
                 <a href="#/Premium">Premium</a>
                </li>
               <li>
                  <a href="#/Support">Support</a>
                </li>
               <li> 
                  <a href="#/Download">Download</a>
               </li>
               <li>|</li>
                <li className='active'> 
                  <a href="#/Sign up">Sign up</a>
                </li>
                <li className='active'> 
                <a href="#/Log in">Login in</a>
              </li>
             </ul>
          </div>
    </header>)
}

// export class LandingPageHeader extends Component {
//     render() {
//         return (<header className = "header">
//           <div className ="logo">Logo</div>
//           <div className ="menu">menu</div>
//     </header>)
//     }
// }