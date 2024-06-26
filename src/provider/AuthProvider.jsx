import { createContext, useEffect } from "react";
import { app } from "../firebase/firebase.config";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    } 

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    }

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }

     }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;