import { CustomButton } from "../Button"
import style from "./style.module.css"
export const DiscountFlag =() => {
    return (
        <div className={style.discount}>
        <p>Special discount for eligible students in university
        <CustomButton type="outline" className="btn-invert" onClick = {()=>{}}>Learn more</CustomButton>
        </p>
        </div>
    )
}