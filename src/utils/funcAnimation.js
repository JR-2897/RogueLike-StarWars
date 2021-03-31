export const variantFightAnimation = {
  initial: { x: 0, transition: { duration: 0.5 } },
  animated1: { x: -25, transition: { duration: 0.5 } },
  animated2: { x: 25, transition: { duration: 0.5 } }
}

export const launchFightAnimation = (refActive, setActive) => {
  setActive(true)
  refActive.current = setTimeout(() => {
    setActive(false)
  }, 5500)
  clearTimeout(refActive)
}
