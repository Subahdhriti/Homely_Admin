import axios from 'axios';
import {apiBase} from '../services/Rest';



// return the user data from the session storage
export const getUser = () => {
  // const userStr = sessionStorage.getItem('user');

  const userStr = getCookie('user');

  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  // return sessionStorage.getItem('token') || null;
  return getCookie('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  // sessionStorage.removeItem('token');
  // sessionStorage.removeItem('user');

  eraseCookie('token');
  eraseCookie('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  // sessionStorage.setItem('token', token);
  // sessionStorage.setItem('user', JSON.stringify(user));
  //console.log(user);

  setCookie('token', token, 1);
  setCookie('user', JSON.stringify(user), 1);
}


export const isLoggedIn = () => {
  const token = getToken();
  axios.delete(apiBase+'/admin/isLoggedIn', { headers: {'x-auth': token} }).then(response => {
    return true;
  }).catch(error => {
      if (error.response.status === 401) return false;
    }
  )
}



function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}


function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}



function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}