import { PremiumPlan, premium  } from "./data";

import style from './Premium.module.css'
 
export const Premium = (props) => {
    return (
        <section className={`${style.premium} ${props.className}`}>
            <h2 className={style.title}>Pick your Premium</h2>
            <p className={style.description}>Listen without limits on your phone,
             speaker, and other devices.
            </p>
            <div className={style.list}>
               {premium.map((premium) => (
                <div className={style.item}>
                 <img src={premium.image} />
                </div>
              ))}
            </div>
            <PremiumPlan className={style.PremiumPlan} />
        </section>
    )
}
 
