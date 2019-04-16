/******************************************************************************
 *  @Purpose        : To create user services that will send the incoming data 
                    to server and save that data to database and at login, reset
                    password, forgotpassword time fetching correct information 
                    from database.
 *  @file           : userServices.js        

 ******************************************************************************/
import axios from 'axios';

/**
 * @param {used to send registration data to send server} data
 */
export function userRegistration (data){
    return axios.post('/registration',data);
}
/**
 * @param {used to send login data to send server } data
 */

 export function userLogin(data){
     return axios.post('/login',data);
 }
 /**
  * @param {*send password data to server} password
  * @param {*used to genrate token and that data is encrypted}toke
  */
 export function resetPassword(password,token){
     return axios.post(`/resetPass/${token}`,
     {'password':password},
     { headers: {'token':token}})
 }
 /**
  * @param {*send forgotPass data to server} username
  */
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