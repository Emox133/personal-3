import React, {useState, useContext } from 'react'
import axios from 'axios'

const AdvertisementsContext = React.createContext()

export function useAdveristments() {
  return useContext(AdvertisementsContext)
}

export function AdvertisementsProvider({ children }) {
  const [advertisements, setAdveristments] = useState([])

  const getAdveristments = () => {
      axios.get('/oglasi').then(res => {
          if(res.status === 200) {
              setAdveristments(...advertisements, res.data.advertisements)
          }
      })
      .catch(err => console.log(err.response))
  }

  const value = {
      advertisements,
      setAdveristments,
      getAdveristments
  }

  return (
    <AdvertisementsContext.Provider value={value}>
      {children}
    </AdvertisementsContext.Provider>
  )
}