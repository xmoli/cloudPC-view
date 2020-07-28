
export default function getSessionId () {
    const sessionId = sessionStorage.getItem("server-admin-sessionId")
    if (sessionId) {
      return sessionId
    } else {
      const id = localStorage.getItem("server-admin-sessionId")
      if (id) {
        return id
      }
      return false
    }
  }