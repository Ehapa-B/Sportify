import UpIcon from "../../assets/images/icons/ups.svg";
import PayIcon from "../../assets/images/icons/paytm.svg";
import VisaIcon from "../../assets/images/icons/visa.svg";
import MasterIcon from "../../assets/images/icons/masters.svg";
import MasterCardIcon from "../../assets/images/icons/mastercard.svg";
import DinersIcon from "../../assets/images/icons/diners.svg";
import { CustomButton } from "../Button";

export const premium = [
  {
    image: UpIcon,
  },

  {
    image: PayIcon,
  },

  {
    image: VisaIcon,
  },

  {
    image: MasterIcon,
  },

  {
    image: MasterCardIcon,
  },

  {
    image: DinersIcon,
  },
];

export const PremiumPlan = () => {
  return (
    <div className="plan">
      <div className="plans">
          <div className=".button-group">
             <CustomButton onClick={() => {}} type="premium">
               One-time plans available
             </CustomButton>
           </div>
           <h3 className="mini">Mini</h3>
           <p>From ₹7/day</p>
          <p>1 account on mobile only</p>
        </div>
        <hr />
        <div>
           <h4>Ad-free music listening on mobile</h4>
           <h4>Group Session</h4>
           <h4>Download 30 songs on 1 mobile device</h4>
       </div>
       <CustomButton onClick={() => {}} type="primary">
          View Plans
       </CustomButton>
       <br />
       <a href="#">Terms and conditions apply.</a>

       <div className="plans">
          <div className=".button-group">
          <CustomButton onClick={() => {}} type="secondary">
          1 month free
         </CustomButton>
         <br />
          <CustomButton onClick={() => {}} type="premium">
            One-time plans available
          </CustomButton>
        </div>
        <h3 className="mini">Individual</h3>
        <p>₹119/month after offer period</p>
        <p>1 account</p>
        </div>
        <hr />
        <div>
           <h4>Ad-free music listening</h4>
            <h4>Group Session</h4>
           <h4>Download 10k songs/device on 5 devices</h4>
        </div>
        <CustomButton onClick={() => {}} type="primary">
          View Plans
        </CustomButton>
        <br />
        <a href="#">Terms and conditions apply.</a>

        <div className="plans">
        <div className='.button-group'>
           <CustomButton onClick={()=>{}} type='premium'>
           One-time plans available
           </CustomButton>
        </div>
          <h3 className="mini">Mini</h3>
          <p>From ₹7/day</p>
          <p>1 account on mobile only</p>
       </div>
       <hr/>
      <div>
          <h4>Ad-free music listening on mobile</h4>
          <h4>Group Session</h4>
          <h4>Download 30 songs on 1 mobile device</h4>
      </div>
      <CustomButton onClick={()=>{}} type='primary'>
         View Plans
      </CustomButton>
       <br />
      <a href="#">Terms and conditions apply.</a>

      <div className="plans">
       <div className='.button-group'>
         <CustomButton onClick={()=>{}} type='premium'>
         One-time plans available
         </CustomButton>
      </div>
      <h3 className="mini">Mini</h3>
       <p>From ₹7/day</p>
       <p>1 account on mobile only</p>
      </div>
      <hr/>
      <div>
         <h4>Ad-free music listening on mobile</h4>
         <h4>Group Session</h4>
         <h4>Download 30 songs on 1 mobile device</h4>
      </div>
      <CustomButton onClick={()=>{}} type='primary'>
         View Plans
      </CustomButton>
      <br />
      <a href="#">Terms and conditions apply.</a>
    </div>
  );
};
