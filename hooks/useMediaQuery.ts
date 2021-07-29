import { useCallback, useEffect, useState } from "react"

export const useMediaQuery = (width: number): boolean => {
  const [targetReached, setTargetReached] = useState<boolean>(false)
  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener("change", (e) => updateTarget(e))
    if (media.matches) {
      setTargetReached(true)
    }
    return () => media.removeEventListener("change", (e) => updateTarget(e))
  }, [])

  return targetReached
}
