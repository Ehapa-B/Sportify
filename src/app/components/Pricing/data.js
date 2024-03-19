import UpIcon from "../../assets/images/icons/ups.svg"
import PayIcon from "../../assets/images/icons/paytm.svg"
import VisaIcon from "../../assets/images/icons/visa.svg"
import MasterIcon from "../../assets/images/icons/masters.svg"
import MasterCardIcon from "../../assets/images/icons/mastercard.svg"
import DinersIcon from "../../assets/images/icons/diners.svg"

export const paymentMethods = [
    {
      icon: UpIcon,
    },

    {
        icon: PayIcon,
    },

    {
        icon: VisaIcon,
    },

    {
        icon: MasterIcon,
    },

    {
        icon: MasterCardIcon,
    },

    {
        icon:DinersIcon,
    },
];

export const pricingList = [
    {
        planName:"Mini",
        price:"From ₹7/day",
        numberAccount: 1,
        features:[
            `Ad-free music listening on mobile`,
            'Group Session',
            'Download 30 songs on 1 mobile device'
        ]
   },
   {
        free:1,
        planName:"Individual",
        price:"₹119",
        numberAccount: 1,
        features:[
            `Ad-free music listening`,
            'Group Session',
            'Download 10k songs/device on 5 devices'
        ]
    },
    {
        free:1,
        planName:"Duo",
        price:"₹149",
        numberAccount: 2,
        features:[
            'For couples who live together',
            `Ad-free music listening`,
            'Group Session',
            'Download 10k songs/device on 5 devices per account'
        ]
    
    },
    {
        free:6,
        planName:"Family",
        price:"₹179",
        numberAccount: 2,
        features:[
            'For family who live together',
            'Block explicit music',
            `Ad-free music listening`,
            'Group Session',
            'Download 10k songs/device on 5 devices'
        ]
    
    },
]