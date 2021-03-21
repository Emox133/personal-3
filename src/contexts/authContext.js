import React, {useState, useContext, useCallback } from 'react'
import axios from 'axios'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState([])

  const fetchUser = () => {
    axios.get('/users/me').then(res => {
      if(res.status === 200) {
        setUser(res.data.user)
      }
    }).catch(err => {
      console.log(err.response)
    })
  }

  const handleLogout = useCallback((history) => {
    axios.get('/users/logout').then(res => {
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization'];
      setAuth(false)
      history.push('/login')
      history.go(0)
      console.log(res)
    }).catch(err => {
      console.log(err.response)
    })
  }, [])

  const value = {
      auth,
      setAuth,
      handleLogout,
      fetchUser,
      user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}