import { useRef, useEffect, useState } from "react"
export const useElementOnScreen = (options) => {
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)

  const callbackFunction = (entries) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    var copyRef = containerRef.current

    const observer = new IntersectionObserver(callbackFunction, options)
    if (copyRef) observer.observe(copyRef)
    
    return () => {
      if(copyRef) observer.unobserve(copyRef)
    }
  }, [containerRef, options])

  return [containerRef, isVisible]
}
