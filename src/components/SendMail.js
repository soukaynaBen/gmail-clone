import { Button } from '@material-ui/core'
import '../styles/sendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import {closeSendMessage} from  '../features/mailSlice'
import { db } from '../firebaseConfig'
import firebase from 'firebase'

function SendMail() {

    const {handleSubmit,register,formState: { errors }}=useForm();

    const onSubmit = formData => {
        db.collection('emails').add({
            to : formData.to,
            subject : formData.subject,
            message : formData.message,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessage());
    }

    const dispatch=useDispatch();

    return (
        <div className="sendMail">
        <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendMail__close"/>
        </div>
          <form  onSubmit={ handleSubmit(onSubmit)}> 
              <input className="sendMail__message" placeholder="To" {...register("to",{required:true})} type='email'/>
              {errors.to && ( <p className="sendMail__error">To is required</p> )}

              <input className="sendMail__message" {...register("subject",{required:true})} placeholder="Subject" type='text'/>
                   {errors.subject && (<p className="sendMail__error">Subject is required</p>) }
              <input className="sendMail__message" {...register("message",{required:true})} placeholder="Message ..." type='text'/>
                 {errors.message && (<p className="sendMail__error">Message is required</p>) }

              <div className="sendMail__options">
                  <Button  type='submit' className="sendMail__send">Send</Button>
              </div>
          </form>
        </div>
    )
}

export default SendMail
