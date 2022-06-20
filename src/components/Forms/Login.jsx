import React,{useState,useEffect} from 'react'
import styles from "./form.module.css"
import notify from './toastify';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import validate from './validate';
const Login=()=> {
  //////////////////////////////////////////////////////////States
  const [errors,setErrors] = useState({});

  const [state ,setState] = useState({
    email:"",
    password:"",
  })

  const [touched,setTouched] = useState({
    email:false,
    password:false,
  })

  //////////////////////////////////////////////////////////useEffects
  
  useEffect(
  ()=>{
    setErrors(validate(state,"Login"));
  },[state,touched]
  )

  //////////////////////////////////////////////////////////changeHandler

  const inputChangeHandler=(e)=>{
    setState({...state,[e.target.name]:e.target.value});
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
    if(!Object.keys(errors).length){
      notify("You loged in successfully!","success")
    }else{
      setTouched({
        email:true,
        password:true,
      })
      notify("Invalid data!","error")

    }
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
      <ToastContainer/>
    </section>
  )
}

export default Login;