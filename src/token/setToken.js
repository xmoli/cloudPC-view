import token from './token.json'
let Key = token.tokenKey
export default function (keep, sessionId) {
    sessionStorage.setItem(Key, sessionId)
    if(keep) {
        localStorage.setItem(Key, sessionId)
    }
}