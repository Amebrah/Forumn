import axios from 'axios';

export default class APIClient { 
  static createAccount(user, pass) {
        axios
        .post('http://localhost:8080/createAccount', {
          username: user,
          password: pass
        })
        .then(res => {
          //console.log(`statusCode: ${res.statusCode}`)
          return res;
        })
        .catch(error => {
          console.error(error)
        })
        return null;
    }

    static login(user, pass) {
      axios
      .get('http://localhost:8080/login', {
        username: user,
        password: pass
      })
      .then(res => {
        //console.log(`statusCode: ${res.statusCode}`)
        return res;
      })
      .catch(error => {
        console.error(error)
      })
      return null;
  }

}