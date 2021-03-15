import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'

const AdvertisementsContext = React.createContext()

export function useAdveristments() {
  return useContext(AdvertisementsContext)
}

export function AdvertisementsProvider({ children }) {
  const [advertisements, setAdveristments] = useState([])
  const [page, setPage] = useState(1)
  const resultsPerPage = 10;
  const start = (page - 1) * resultsPerPage; // 0
  const end = page * resultsPerPage // 10

  const handlePageIncrease = () => {
    setPage(page => page + 1)
  }

  console.log(start, end)
  const getAdveristments = () => {
      axios.get('/oglasi').then(res => {
          if(res.status === 200) {
              setAdveristments(...advertisements, res.data.advertisements.slice(start, end))
          }
      })
      .catch(err => console.log(err.response))
  }

  const value = {
      advertisements,
      setAdveristments,
      getAdveristments,
      handlePageIncrease
  }

  return (
    <AdvertisementsContext.Provider value={value}>
      {children}
    </AdvertisementsContext.Provider>
  )
}