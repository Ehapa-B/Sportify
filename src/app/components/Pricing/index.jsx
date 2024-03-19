import { DiscountFlag } from "./DiscountFlag"
import { PricingCardItem } from "./Pricingcard"
import { paymentMethods, pricingList } from "./data"
import style from './style.module.css'


export const PricingSection = () => {
    const renderPaymentMethod = (method) => {
       if (method.icon) return <img src ={method.icon} />
       return null
    }
    return (
        <section className={style.section}>
          <h2 className={style.title}>Pick your Premium</h2>
          <p className={style.description}>Listen without limits on your phone,
           speaker, and other devices.
          </p>
          <div className={style.flex}>
            {
              paymentMethods.map (renderPaymentMethod)
            }
          </div>
          <br />
          <br />
          <div className={style.flex}>
          {
            pricingList.map ((plans)=> {
              return <PricingCardItem {...plans}/>
            }) 
          }
        </div>
        <br />
        <br />
        <DiscountFlag />
        
        <br />
        <br />
        </section>
    )
}