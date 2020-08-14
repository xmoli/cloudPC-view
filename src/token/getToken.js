import token from './token.json'
let Key = token.tokenKey

export default function getSessionId () {
    const sessionId = sessionStorage.getItem(Key)
    if (sessionId) {
      return sessionId
    } else {
      const id = localStorage.getItem(Key)
      if (id) {
        return id
      }
      return false
    }
  }