import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }

    const registerUser = (email, password) => {
        // console.log("from hook", email, password);
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

            .finally(() => setIsLoading(false))
    }

    const setUserName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
          
      }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setLoggedInUser(user)
            }
            else {
                setLoggedInUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setLoggedInUser({});
        })
            .finally(() => setIsLoading(false))
    }
    return {
        loggedInUser,
        signInUsingGoogle,
        logOut,
        isLoading,
        registerUser,
        setUserName
    }
}

export default useFirebase;