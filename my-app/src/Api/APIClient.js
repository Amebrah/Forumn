import axios from 'axios';

export default class APIClient { 
  //POST call to create an account
  static async createAccount(user, pass) {
        const response =  await  axios
        .post('http://localhost:8080/createAccount', {
          username: user,
          password: pass
        })
        return  response.data;
    }

    //GET call to login
    static async login(user, pass) {
      const response =  await axios
      .get('http://localhost:8080/login', {
        username: user,
        password: pass
      })
      return  response.data;
  }

}