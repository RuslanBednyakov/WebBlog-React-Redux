import api from '../sevices/api';

export function getListUsers (char) {

  return api.post(`search/user`, char)
    .then((r) => r)
    .catch( err => { throw err } )
}

export function getListFriends () {

  return api.get(`friends`)
    .then((r) => r)
    .catch( err => { throw err } )
}