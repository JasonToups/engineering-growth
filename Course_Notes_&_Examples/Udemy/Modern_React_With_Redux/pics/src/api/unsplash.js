import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID hgKw_RxwEmfUPHaee1K_3OsbQO1DoqDObmM-acR5ssE'
  }
})