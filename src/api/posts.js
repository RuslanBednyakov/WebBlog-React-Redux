import api from '../sevices/api';

export function getOwnPosts (id) {

  return api.get(`posts/${id}`)
    .then((r) => r)
    .catch( err => { throw err } )
}

export function savePost (data) {

  return api.post(`posts`, data)
    .then((r) => r)
    .catch( err => { throw err } )
}

export function getFriendsPosts (id) {

  return api.get(`posts/${id}/friends`)
    .then((r) => r)
    .catch( err => { throw err } )
}
