
import firebase from 'firebase/app'
import "firebase/auth";
import databaseRef from '../../firebase-config';
import { CHANGE_QUANTITY, ITEMS_RETRIEVED, LOGGED_OUT, SET_ERROR, USER_RETRIEVED } from './action_types';


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

export const itemsRetrieved = (items) => ({
    type: ITEMS_RETRIEVED,
    payload: items
})

export const changeQuantityDisplay = (op, id) => ({
    type: CHANGE_QUANTITY,
    payload: {op, id}
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

export let checkLogin = () => {
    return async (dispatch) => {
      try {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(userRetrieved(user));
            }
        });
      }
      catch (e) {
        console.log(e)
      }
    };
};
  

export const logOut = () => {
    return async (dispatch) => {
        firebase.auth().signOut().then(() => {
            dispatch(loggedOut())
          }).catch((error) => {
            dispatch(setError(error.message))
          });
    }
}

export const getItems = (category) => {
    return async (dispatch) => {
        try {
            let items = []
            await databaseRef.collection(category).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    items.push({...doc.data(), id: doc.id})
                });
            });
            dispatch(itemsRetrieved(items))
        }
        catch (e) {

        }
    }
}

export const deleteItem = (category, id) => {
    return async (dispatch) => {
        console.log(category, id, 'delete')
        databaseRef.collection(category).doc(id).delete().then(() => {
            dispatch(getItems(category))
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}

export const addItem = (category, item) => {
    return async (dispatch) => {
        databaseRef.collection(category).add(item).then(() => {
            dispatch(getItems(category))
        }).catch((error) => {
            console.error("Error adding document: ", error);
        })
    }
}

export const changeQuantity = (op, id, category) => {
    return async (dispatch) => {
        const increment = firebase.firestore.FieldValue.increment(1);
        const decrement = firebase.firestore.FieldValue.increment(-1);
        if (op === 'increase') {
             await databaseRef.collection(category).doc(id).update({quantity: increment})
        }
        else if (op === 'decrease') {
            await databaseRef.collection(category).doc(id).update({quantity: decrement})
        }
        dispatch(changeQuantityDisplay(op, id))
    }
}