import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../components/login/firebase/firebase.inite";

initializeAuthentication();

const useFirebase = () =>{

    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        .finally(() => { setLoading(false)});
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUsers({})
            })
            .finally(() => setLoading(false))
    }

    //user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            }
            else {
                setUsers({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        users,
        loading,
        signInUsingGoogle,
        logOut
    }


}
export default useFirebase;