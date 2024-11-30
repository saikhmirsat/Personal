import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const LoginContext = createContext()

export default function LoginDetail({ children }) {
    const checkAdmin = localStorage.getItem("isAdmin")
    const checkIsAuth = localStorage.getItem("isAuth")
    const UserData = JSON.parse(localStorage.getItem("user"))

    const [isAdmin, setIsAdmin] = useState(checkAdmin || "")
    const [isAuth, setIsAuth] = useState(checkIsAuth || "")
    const [User, setUser] = useState(UserData || {})

    return (
        <LoginContext.Provider value={{ isAdmin, setIsAdmin, isAuth, setIsAuth, User, setUser }}>{children}</LoginContext.Provider>
    )
}
