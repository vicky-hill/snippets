import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4oYcfBkV8nNhY1asRWBgUmQhlxbHvh4E",
  authDomain: "reqdoc-620b1.firebaseapp.com",
  projectId: "reqdoc-620b1",
  storageBucket: "reqdoc-620b1.appspot.com",
  messagingSenderId: "333617033089",
  appId: "1:333617033089:web:7d8217496d7458679ac280"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
// Add authorization to firebase project to use auth features

export const authorization = {
  resetPassword: (options, email) => async () => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          resolve({
            type: success
          });
        })
        .catch(err => {
          console.log(err)
          reject({
            type: failure,
            payload: err.message
          });
        });
    }

    return new Promise(promise);
  }
}