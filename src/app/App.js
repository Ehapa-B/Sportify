import './App.css';
import { Landing } from './components/pages/Landing';
import {useNavigation} from './components/hooks/useNavigation'
import { LoginPage } from './components/pages/Login';

export function App() {
        const [url] = useNavigation ()
        
        switch (url) {
          case '/home':
             return <Landing />
         default:
              return <LoginPage />
          break;
       }
    
}