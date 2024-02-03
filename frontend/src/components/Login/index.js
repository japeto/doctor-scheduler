import './style.css';

import { authUser } from  '../../api'
import { useState } from 'react';

const Login = () =>{

  const [user, setUser] = useState({
    email:"",
    pass:"",
    empty:false,
    error:false
  });

  const onSubmit = function(event){
    const aForm = event.target;
    let aUser = Object.assign({}, {
        email:aForm.email.value, 
        pass:aForm.pass.value
    })
    if(!aUser.email || !aUser.pass){
      setUser({
        ...user,
        ["empty"]: true
      })
      event.preventDefault();
      return;
    }

    authUser(aUser)
      .then(resp =>{
        console.log(`Success!!`, resp.data)
        const { token, name } = resp.data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", name);
      })
      .catch(err =>{
        console.log(err);
        setUser({
          ...user,
          ['error']:true
        })
        event.preventDefault();
        return;
      })
    // detener el evento de interfaz
    event.preventDefault();
  }

  const onChageInput = function(event){
    const key = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [key]: value
    });

  }

  return(
    <div className='auth-container'>
      <form onSubmit={onSubmit}>
        <div  className='auth-form'>
          <div className='auth-form-content'>
            <h2 className='auth-form-title'>Doctor Scheduler</h2>
            {user.empty && (
              <span className='text-warning'>Digite las credenciales de usuario.</span>
            )}
            {user.error && (
              <span className='text-error' >Hay un error de acceso!</span>
            )}
            <div className='form-group mt-3'>
              <input 
                type="email" name='email' id='email'
                onChange={onChageInput}
                autoComplete='off'
                className='form-control mt-1' 
                placeholder='correo@myapp.com'/>
            </div>
            <div className='form-group mt-3'>
              <input
                type='password' name='pass' id='pass'
                onChange={onChageInput}
                className='form-control mt-1'
                placeholder='Contraseña'/>
            </div>
            <div className='form-group my-3'>
              <a className='auth-form-forget' href="/forget-pass">Recuperar contraseña</a>
            </div>
            <div className='form-group mt-3'>
              <button className='btn btn-sm btn-primary w-100'>
                Acceder
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Login;