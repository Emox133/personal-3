import React, {useState, useContext, useRef} from 'react'
import axios from 'axios'

const AdvertisementsContext = React.createContext()

export function useAdveristments() {
  return useContext(AdvertisementsContext)
}

export function AdvertisementsProvider({ children }) {
  const [advertisements, setAdveristments] = useState([])
  const [advertisement, setAdvertisement] = useState([])
  const [visible, setVisible] = useState(4)
  const [loading, setLoading] = useState(false)
  const hasMore = useRef(true)

  const handlePageIncrease = fn => {
    setVisible((prevValue) => prevValue + 4)
    fn()
  }

  const getAdveristments = () => {
      setLoading(true)
      axios.get('/oglasi').then(res => {
          if(res.status === 200) {
              setAdveristments(...advertisements, res.data.advertisements)
              setLoading(false)
          }
      })
      .catch(err => {
        console.log(err.response)
        setLoading(false)
      })
  }

  const getAdvertisement = (id, history) => {
    setLoading(true)
    axios.get(`/oglasi/${id}`).then(res => {
      if(res.status === 200) {
        setAdvertisement(res.data.advertisement)
        setLoading(false)
      }
    }).catch(err => {
      console.log(err.response)
      setLoading(false)
    })
  }

  const value = {
      advertisements,
      advertisement,
      setAdveristments,
      getAdveristments,
      getAdvertisement,
      handlePageIncrease,
      visible,
      setVisible,
      hasMore,
      loading
  }

  return (
    <AdvertisementsContext.Provider value={value}>
      {children}
    </AdvertisementsContext.Provider>
  )
}