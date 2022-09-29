import React from 'react'
import './App.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Recaptcha from './ReCAPTCHA';


const Form = ()=>{
 

const schema = yup.object().shape({
  firstName: yup.string().required("Must have firstname"),
  lastName: yup.string().required("Enter lastname"),
  email: yup.string().email().required("Email is required"),
  age: yup.number().positive("Must be a number"),
  password: yup.string().min(8).max(15).required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("Passwords must match"),
})
const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm({
  resolver: yupResolver(schema),
});

  const onSubmit =(data)=>{
    console.log(data);
  }
  return(

<div className='Form'>
  <div className='title'>Sara and Lizzys list</div>
  <div className='inputs'>
<form onSubmit={handleSubmit(onSubmit)}>

  <input type="text" 
   name='firstName'
   placeholder='Firstname...'  
   {...register("firstName")} />
   <p>{errors.firstName?.message}</p>

  <input type="text"
   name='lastName'
   placeholder='Lastname...'  
   {...register("lastName")} />
   <p>{errors.lastName?.message}</p>

  <input type="text" 
  name='email' 
  placeholder='Email...'  
  {...register("email")}/>
<p>{errors.email?.message}</p>

  <input type="number"
   name='age' 
   placeholder='Age..'  
   {...register("age")} />
 <p>{errors.age?.message}</p>

  <input type="password" 
  name='password' 
  placeholder='Password...' 
  {...register("password")}/>
<p>{errors.password?.message}</p>

  <input type="password"
   name='confirmPassword'
   placeholder='Confirm password...' 
   {...register("confirmPassword")} />
  <p>{errors.confirmPassword && 'Passwords should match!'}</p>
  <Recaptcha  />

   <input type="submit" disabled id="login_btn" />

    </form>
  </div>
</div>

  )
}
export default Form;