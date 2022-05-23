import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const apiName = 'api63abcec4';
const path = '/items'; 

API
  .get(apiName, path)
  .then(response => {
    document.getElementById("msg").innerHTML = response;
  })
  .catch(error => {
    console.log(error.response);
 });