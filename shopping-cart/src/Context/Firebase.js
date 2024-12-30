import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from "firebase/auth";
import {getDatabase, set, ref} from "firebase/database";
import toast from "react-hot-toast";

const firebaseConfig = {
    apiKey: "AIzaSyA1KZP9-T7OQJfqrJRhry3EzJb41CKQAG8",
  authDomain: "shopping-cart-7dcc5.firebaseapp.com",
  projectId: "shopping-cart-7dcc5",
  storageBucket: "shopping-cart-7dcc5.firebasestorage.app",
  messagingSenderId: "260322420045",
  appId: "1:260322420045:web:800415311e2ad76f60c304",
  databaseUrl: "https://shopping-cart-7dcc5-default-rtdb.firebaseio.com",

};



const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const signupUserWithEmailAndPassword = (email, password) => {
       return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }; 

    // const signInWithEmailAndPassword =(email,password) => {
    //   return signInWithEmailAndPasswordd(firebaseAuth, email, password)
    //   .then((value) => toast.success("Successfully Loged In"))
    //     .catch((err) => toast.error("Failed to loged In "))
    // };

    const signInWithEmailAndPassword = (email, password) => {
      firebaseSignInWithEmailAndPassword(firebaseAuth, email, password)
      .then((value) => toast.success("Successfully Loged In"))
      .catch((err) => toast.error("Failed to loged In "));
    }
        
    const putData = (key, data) => set(ref(database, key), data);

    return <FirebaseContext.Provider value={ { signupUserWithEmailAndPassword, putData,signInWithEmailAndPassword}}>
                {props.children}
            </FirebaseContext.Provider>
    
}

// import { createContext, useContext } from "react";
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { getDatabase, set, ref } from "firebase/database";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA1KZP9-T7OQJfqrJRhry3EzJb41CKQAG8",
//   authDomain: "shopping-cart-7dcc5.firebaseapp.com",
//   projectId: "shopping-cart-7dcc5",
//   storageBucket: "shopping-cart-7dcc5.firebasestorage.app",
//   messagingSenderId: "260322420045",
//   appId: "1:260322420045:web:800415311e2ad76f60c304",
//   databaseUrl: "https://shopping-cart-7dcc5-default-rtdb.firebaseio.com",
// };

// // Initialize Firebase services
// const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(firebaseApp);
// const database = getDatabase(firebaseApp);

// // Create Firebase context
// const FirebaseContext = createContext(null);

// // Firebase provider
// export const FirebaseProvider = ({ children }) => {
//   // Functions to provide
//   const signupUserWithEmailAndPassword = (email, password) => {
//     return createUserWithEmailAndPassword(firebaseAuth, email, password);
//   };

//   const putData = (key, data) => set(ref(database, key), data);

//   return (
//     <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, putData }}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

// // Custom hook for Firebase context
// export const useFirebase = () => {
//   const context = useContext(FirebaseContext);
//   if (!context) {
//     throw new Error("useFirebase must be used within a FirebaseProvider");
//   }
//   return context;
// };
