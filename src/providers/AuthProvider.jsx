
import app from "../firebase/firebseconfig";
import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import { createContext, useState, useEffect} from "react";
import { signOut } from "firebase/auth";

// import auth from '../firebase/firebseconfig'
// 

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    
    
    
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in the onAuthStateChanged', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;