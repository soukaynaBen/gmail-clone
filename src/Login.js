import './styles/login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
function Login() {
    const dispatch=useDispatch()
    
    const signIn=()=>{
       auth.signInWithPopup(provider).then(({user}) =>{
         dispatch(login({
             displayName:user.displayName,
             photoUrl:user.photoURL
         }));  
       }).catch(error =>{alert(error.message)})
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="gmail" />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
