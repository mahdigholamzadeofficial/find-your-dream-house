const validate=(data,type)=>{

  const errors={};
  if(type==="SignUp"){

    if(!data.name.trim()){
      errors.name="username is required!"
    }else{
      delete errors.name
    }
  
    if(!data.email){
      errors.email="Email is required!"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
      errors.email = "Email adress is invalid!"
    }
    else{
      delete errors.email
    }

    if(!data.password){
      errors.password = "Password is required!"
    }else if(data.password.length<6){
      errors.password = "Password needs to be more than 6 character"
    }else{
      delete errors.password;
    }

    if(!data.confirmPassword){
      errors.confirmPassword = "Confirm the password!"
    }else if(data.password !== data.confirmPassword){
      errors.confirmPassword = "The password did not match!"
    }else{
      delete errors.confirmPassword
    }

    if(data.privacyCheckbox){
      delete errors.privacyCheckbox
    }else{
      errors.privacyCheckbox = "Accept our regulations!"
    }

  }else{
    if(!data.email){
      errors.email="Email is required!"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
      errors.email = "Email adress is invalid!"
    }
    else{
      delete errors.email
    }
  
    if(!data.password){
      errors.password = "Password is required!"
    }else if(data.password.length<6){
      errors.password = "Password needs to be more than 6 character"
    }else{
      delete errors.password;
    }
  }


  return errors;
}
export default validate;