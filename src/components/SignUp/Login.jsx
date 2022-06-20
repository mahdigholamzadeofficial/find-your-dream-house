import React,{useState,useEffect} from 'react'
import styles from "./form.module.css"

import { Link } from 'react-router-dom';
import validate from './validate';
const Login=()=> {
  //////////////////////////////////////////////////////////States
  const [errors,setErrors] = useState({});

  const [state ,setState] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    privacyCheckbox:false,
  })

  const [touched,setTouched] = useState({
    name:false,
    email:false,
    password:false,
    confirmPassword:false,
    privacyCheckbox:false,
  })

  //////////////////////////////////////////////////////////useEffects
  
  useEffect(
  ()=>{
    setErrors(validate(state,"Login"));
  },[state,touched]
  )

  //////////////////////////////////////////////////////////changeHandler

  const inputChangeHandler=(e)=>{
    if(e.target.name!== "privacyCheckbox"){
      setState({...state,[e.target.name]:e.target.value});
    }
    else{
      setState({...state,[e.target.name]:e.target.checked})
    }
  }

  //////////////////////////////////////////////////////////focusHandler

  const focusHandler = (e) =>{
    setTouched({
      ...touched,[e.target.name]:true
    })
    
  }

  //////////////////////////////////////////////////////////submitHandler

  const submitHandler=(e)=>{
    e.preventDefault();
    setTouched({
      name:true,
      email:true,
      password:true,
      confirmPassword:true,
      privacyCheckbox:true,
    })
  }
  return (
    <section className={styles.formContainer}>
      <div className={styles.Form}>
        <h3>Login</h3>
        <form onSubmit={submitHandler}>

          <div className={styles.inputsSections}>
            <label htmlFor="email">Email</label>
            <input
              className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
              onFocus={focusHandler}
              onChange={inputChangeHandler}
              value={state.email}
              name='email'
              id='email'
              type="email"  
            />
            <span>{errors.email && touched.email && errors.email}</span>
          </div>

          <div className={styles.inputsSections}>
            <label htmlFor="password">Password</label>
            <input
              className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
              onFocus={focusHandler}
              onChange={inputChangeHandler}
              value={state.password}
              name='password'
              id='password'
              type="password"
            />
            <span>{errors.password&& touched.password && errors.password}</span>
          </div>

          <div className={styles.buttons}>
            <Link to="/signup">Sign Up</Link>
            <button type='submit' className='btn btn-dark'>Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login;