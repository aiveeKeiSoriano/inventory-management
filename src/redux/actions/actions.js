
import firebase from 'firebase/app'
import "firebase/auth";
import { LOGGED_OUT, SET_ERROR, USER_RETRIEVED } from './action_types';


export const userRetrieved = (user) => ({
    type: USER_RETRIEVED,
    payload: user
})

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})

export const loggedOut = () => ({
    type: LOGGED_OUT
})

export const signUp = (email, password) => {
    return async (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            dispatch(userRetrieved(userCredential.user))
        })
        .catch((error) => {
            dispatch(setError(error.message))
        });
    }
}

export const logIn = (email, password) => {
    return async (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            dispatch(userRetrieved(userCredential.user))
        })
        .catch((error) => {
            dispatch(setError(error.message))
        });
    }
}

export const logOut = () => {
    return async (dispatch) => {
        firebase.auth().signOut().then(() => {
            dispatch(loggedOut())
          }).catch((error) => {
            dispatch(setError(error.message))
          });
    }
}