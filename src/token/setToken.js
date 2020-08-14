import token from './token.json'
let Key = token.tokenKey
export default function (keep) {
    if(keep) {
        const sessionId = sessionStorage.getItem(Key)
        localStorage.setItem(Key, sessionId)
    }
}