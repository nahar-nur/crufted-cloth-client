
import app from "../firebase/firebseconfig";
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import { createContext, useState, useEffect} from "react";
import { signOut } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        // setLoading(true)
        return signOut(auth)
    }
    const signIn = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
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
        // loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;