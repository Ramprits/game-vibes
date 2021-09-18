import { createContext, useState, useEffect } from "react"
import netlifyIdentity from 'netlify-identity-widget'
const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
    authReady: false
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        netlifyIdentity.init()

    }, [])
    return <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
}