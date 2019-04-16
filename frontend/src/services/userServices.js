/******************************************************************************
 *  @Purpose        : To create user services that will send the incoming data 
                    to server and save that data to database and at login, reset
                    password, forgotpassword time fetching correct information 
                    from database.
 *  @file           : userServices.js        

 ******************************************************************************/
 import axios from 'axios';


//@param {used to send registration data to send server} data
 
export function userRegistration (){
    let newUser = {
        FirstName: this.User.FirstName,
         Email: this.User.Email,
       Password:this.User.Password
      };
      console.log(newUser);
      axios
        .post('http://localhost:3000/registration', newUser)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  


// @param {used to send login data to send server } data
 

 export function userLogin(data){
     return axios.post('/login',data);
 }

// @param {*send password data to server} password
//    @param {*used to genrate token and that data is encrypted}toke
  
 export function resetPassword(password,token){
     return axios.post(`/resetPass/${token}`,
     {'password':password},
     { headers: {'token':token}})
 }
 
//  @param {*send forgotPass data to server} username
  
 export function forgotPassword(userName){
     axios.post('/forgotPass',
     {
         'Email': userName,
     })
     .then(function(response){
         console.log(response);
         alert('please check your email...')
     })
     .catch(function(err){
         console.log(err);
         alert('User Not found...');
     });
 }









 /**
// import { resolve } from 'dns';
// import { rejects } from 'assert';
// import Vue from 'vue'
// import axios from 'axios';
// import VueAxios from 'vue-axios';
const url = 'http://localhost:3000/api/server/';
class PostService{
    static getPosts(){
        return new Promise(async(resolve,reject) =>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => 
                        ({
                        ...post,
                        createdAt : new Date(post.createdAt)
                    }))
                )
            }catch(err){
                reject(err);
            }
        });
    }


    static insertPost(text){
        return axios.post(url,{
            text
        });
    }
    static deletePst(id){
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;
*/