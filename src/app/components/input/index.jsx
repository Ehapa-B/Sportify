import React from 'react';
import style from './style.module.css'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

export const CustomInput =({label, ...props}) => {
    const [show, setShow] = React.useState(false)
    let type = props.type
    if (props.type === 'password') {
        type = !show ? 'password' : 'text'
    }
    const handleIconToggle = () => {
        setShow(!show)
    }
    return (
        <div className={style.wrapper}>
        <label>{label}</label>
          <input 
               {...props}
               type={type}
            />
            {
                props.type === 'password' && <div onClick={handleIconToggle} className={style.icon}>
                  { 
                    !show ?
                     <FaRegEyeSlash size={'2rem'}/> :
                    <FaRegEye size={'2rem'} />} 
                </div>
            }


        </div>
    )
}