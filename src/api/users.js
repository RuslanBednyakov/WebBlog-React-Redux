import api from '../sevices/api';

export function getListUsers (char) {

  return api.get(`users/search?name=${char}`)
    .then((r) => r)
    .catch( err => { throw err } )
}

export function getListFriends (id) {

  return api.get(`users/search?name=${id}`)
    .then((r) => r)
    .catch( err => { throw err } )
}