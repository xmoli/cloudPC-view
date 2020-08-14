import token from './token.json'
let Key = token.tokenKey

export default function () {
    sessionStorage.removeItem(Key)
    localStorage.removeItem(Key)
}