import axios from 'axios';

export default class APIClient { 
  //POST call to create an account
  static createAccount(user, pass) {
        axios
        .post('http://localhost:8080/createAccount', {
          username: user,
          password: pass
        })
        .then(res => {
          return res;
        })
        .catch(error => {
          console.error(error)
        })
        return null;
    }

    //GET call to login
    static login(user, pass) {
      axios
      .get('http://localhost:8080/login', {
        username: user,
        password: pass
      })
      .then(res => {
        return res;
      })
      .catch(error => {
        console.error(error)
      })
      return null;
  }

}