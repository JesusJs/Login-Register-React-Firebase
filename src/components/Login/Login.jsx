import React, {useState} from 'react'
import { auth } from '../firebaseconfig'
import {useHistory } from 'react-router-dom'


export const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgerror, setMsgError] = useState(null)

    const RegistrarUsuario = (e)=> {
        e.preventDefault()

            auth.createUserWithEmailAndPassword(email,pass)
            .then((r) => history.push('/'))
         .catch ( e  =>{
           if(e.code == 'auth/invalid-email'){
               setMsgError('Formato Email incorrecto')
           }
           if(e.code == 'auth/weak-password') {
               setMsgError('La password debe tener 6 caracteres o mas')
           } 
         })
    }

    const LoginUsuario = () => {
        auth.signInWithEmailAndPassword(email,pass)
        .then( (r) => history.push('/'))
        .catch( (err) => {
            if(err.code === 'auth/wrong-password'){
                setMsgError('La password es invalida')
            }
            console.log(err);
        })
    }

    return (
        <div className="row mt-5">
           <div className="col"></div>
           <div className="col">
        <form onSubmit={RegistrarUsuario} className="form-group">
            <input 
            onChange={(e) => {setEmail(e.target.value) }}
            className="form-control"
            placeholder="Introduce el Email"
            type="text"
            />
            <input 
             onChange={(e) => {setPass(e.target.value) }}
            className="form-control mt-4"
            placeholder="Introduce el Password"
            type="password"
            />
            <input 
            className="btn btn-dark btn-block mt-4"
            value="Registrar Usuario"
            type="submit"
            />
        </form>
            <button onClick={LoginUsuario} className="btn btn-success btn-block">
                Iniciar sesion
            </button>
            {
                msgerror != null ?

                (
                    <div>{msgerror}</div>
                )

                :

                (
                    <span></span>
                )
            }

           


           </div>
           <div className="col"></div>
        </div>
    )
}


export default Login