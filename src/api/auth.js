import api from '../sevices/api';


export function login (auth) {
  return api.post('auth/login', auth)
    .then((r) => r.data)
    .catch( err => { throw err } )
}

export function signUp (auth) {
  return api.post('auth/sign-up', auth)
    .then((r) => r.data)
    .catch( err => { throw err } )
}