import useAxiosPublic from "../Components/hook/useAxiosPublic";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        const unSubscribe = async () => {
            setLoading(true)
            const { data } = await axiosPublic.get("/")
            setUser(data)
            setLoading(false)
        }

        unSubscribe()
        return () => unSubscribe
    }, [axiosPublic])

    const items = {
        user,
        setUser,loading
    }
    return (
        <AuthContext.Provider value={items}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;