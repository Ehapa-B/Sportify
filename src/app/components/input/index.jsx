import style from './style.module.css'

export const CustomInput = (props) => {
    return (
        <div>
          <input {...props} className={style['input-field']} />
        </div>
    )
}