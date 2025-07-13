import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoadin] = useState(true)

    const creatUser = (email, password) => {
        setLoadin(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const sinInUser = (email, password) => {
        setLoadin(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        loading,
        creatUser,
        sinInUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;