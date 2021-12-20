import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../config/firebase';

const signUp = async ({email, password}) => {
    if(email === '' || password === ''){
        console.log("some fields are incomplete");
    }
    else{
        await createUserWithEmailAndPassword(auth, email, password);
    }
}

const logIn = async ({email, password}) => {
    if(email === '' || password === ''){
        console.log("some fields are incomplete");
    }
    else{
        await signInWithEmailAndPassword(auth, email, password);
    }
}

export { signUp, logIn }