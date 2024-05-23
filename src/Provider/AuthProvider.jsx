import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosCommon from "../hooks/useAxiosCommon";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosCommon = useAxiosCommon()
    const googleProvider = new GoogleAuthProvider();
    // google signin
    const handelGoolesign = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logut user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    useEffect(() => {
        const unsuscrib = onAuthStateChanged(auth, async(cureentUser) => {
            setUser(cureentUser)
            console.log("current user=>", cureentUser)
            if (cureentUser) {
                const userInfo = { email: cureentUser?.email }
                try {
                    const { data } =await axiosCommon.post("/jwt", userInfo)
                    console.log(data)
                    if (data.token) {
                        localStorage.setItem("access_token", data.token)
                    }
                } catch (error) {
                    console.log(error.message)
                }
            } else {
                localStorage.removeItem("access_token")
            }
            setLoading(false)
        });
        return () => {
            unsuscrib()
        }
    }, [axiosCommon])



    // context info
    const authInfo = { user, loading, setLoading, createUser, loginUser, logOut, updateUserProfile, handelGoolesign }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;