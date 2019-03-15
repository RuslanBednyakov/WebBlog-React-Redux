import axios from 'axios';
import config from '../config';
const { path  } = config;

class Api {
  get(url, config) {
    return new Promise((resolve, reject) => {
      axios.get(path.BASE_URL + path.BASE_API + url, config)
        .then(({data}) => resolve(data))
        .catch(error => reject(error));
    });
  }

  put(url, _data = {}) {
    return  new Promise((resolve, reject) => {
      axios.put(path.BASE_URL + path.BASE_API + url, _data)
        .then(({data}) => resolve(data))
        .catch(error => reject(error));
    });
  }

  post(url, _data = {}) {
      
    return  new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({data: {
          token: '21jkjfho34o3i9rtiw3rj2lknfsd',
          user: _data,
          url: path.BASE_URL + path.BASE_API + url
        }});
      }, 2000);
      // axios.post(path.BASE_URL + path.BASE_API + url, _data)
        // .then(({data}) => resolve(data))
        // .catch(error => reject(error));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      axios.delete(path.BASE_URL + path.BASE_API + url)
        .then(({data}) => resolve(data))
        .catch(error => reject(error));
    });
  }
}

const api = new Api();
export default api;