import React,{useState,useEffect} from 'react'
import styles from "./form.module.css";
import { Link } from 'react-router-dom';
import validate from './validate';
import { ToastContainer } from 'react-toastify';
import notify from './toastify';
const SignUp=()=> {
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
    setErrors(validate(state,"SignUp"));
  },[state]
  )

  //////////////////////////////////////////////////////////changeHandler

  const inputChangeHandler=(e)=>{
    if(e.target.name === "privacyCheckbox"){
      setState({...state,[e.target.name]:e.target.checked});
    }
    else{
      setState({...state,[e.target.name]:e.target.value})
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
    if(!Object.keys(errors).length){
      notify("You signed in successfuly!","success")
    }
    else{
      setTouched({
        name:true,
        email:true,
        password:true,
        confirmPassword:true,
        privacyCheckbox:true,
      });
      notify("Invalid data","error")

    }
  }
  return (
    <section className={styles.formContainer}>
      <div className={styles.Form}>
        <h3>Sign Up</h3>
        <form onSubmit={submitHandler}>
          <div className={styles.inputsSections}>
            <label htmlFor="name">Name</label>
            <input
              className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
              onFocus={focusHandler}
              onChange={inputChangeHandler}
              value={state.name}
              name='name'
              id='name'
              type="text"
          
            />
            <span>{errors.name&& touched.name && errors.name}</span>
          </div>

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

          <div className={styles.inputsSections}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
              onFocus={focusHandler}
              onChange={inputChangeHandler}
              value={state.confirmPassword}
              name='confirmPassword'
              id='confirmPassword'
              type="password"
            />
            <span>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
          </div>

          <div className={styles.checkBoxInputsSections}>
            <div>
              <label htmlFor="privacyCheckbox">I accept terms of privacy policy</label>
              <input
                onFocus={focusHandler}
                onChange={inputChangeHandler}
                value={state.privacyCheckbox}
                name='privacyCheckbox'
                id='privacyCheckbox'
                type="checkbox"
              />
            </div>
            <span>{errors.privacyCheckbox && touched.privacyCheckbox && errors.privacyCheckbox}</span>
          </div>

          <div className={styles.buttons}>
            <Link to="/login">Login</Link>
            <button type='submit' className='btn btn-dark'>Sign Up</button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </section>
  )
}

export default SignUp;