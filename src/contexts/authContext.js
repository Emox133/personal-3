import React, {useState, useContext } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false)

  console.log(auth)

  const value = {
      auth,
      setAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}