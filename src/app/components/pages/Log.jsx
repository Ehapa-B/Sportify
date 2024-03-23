// import React from "react"
// import { CustomButton } from "../Button"
// import { CustomInput } from "../input"
// import { loginUser } from "../service/login"

// export const Login = () => {
//   const [form, setForm] = React.useState({})
//   const handleLogin = () => {
//    loginUser(form.username, form.password)
//    .then ((res) => {
//     localStorage.setItem('user', JSON.stringify(res))
//     window.location.href = '?status=home'
//    })
//    .catch((err) => {
//     alert('invalid login')
//    })
//   }
//   console.log (form)
//     return (
//         <div>
//           <h1>Login Page</h1>
//           <CustomInput onChange={(event) => setForm({...form, username: event.target.value})} placeholder="Email address" />
//           <CustomInput onChange={(event) => setForm({...form, password: event.target.value})} placeholder="password" type="password" />
//           <br />
//           <CustomButton onClick ={()=> {}} >Login</CustomButton>
//         </div>
//     )
// }