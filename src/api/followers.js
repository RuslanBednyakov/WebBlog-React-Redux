import api from '../sevices/api';

export function subscribe (data) {

  return api.post(`followers`, data)
    .then((r) => r)
    .catch( err => { throw err } )
}

export function unsubscribe (id) {

  return api.delete(`followers/${id}`)
    .then((r) => r)
    .catch( err => { throw err } )
}