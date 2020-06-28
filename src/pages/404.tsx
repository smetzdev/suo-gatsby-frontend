const NotFound = () => {
  if (typeof window !== "undefined") {
    window.location.href = "/"
  }

  return null
}

export default NotFound
