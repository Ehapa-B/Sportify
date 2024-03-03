import './HeroSection.css';
import {Button} from './GetStarted';

export const HeroSection = () => {
    return (
        <div className='hero'>
        <h1>Get Premium free for 1 month</h1>
        <p>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>

        <Button />
        
        <h6><a href='#/HeroSection'>Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</h6>
        </div>
    )
}