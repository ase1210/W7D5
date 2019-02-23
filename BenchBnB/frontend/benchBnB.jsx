import React from 'react';
import ReactDOM from 'react-dom';
import { postUser, postSession, deleteSession } from './util/session_api_util';

window.postUser = postUser;
window.postSession = postSession;
window.deleteSession = deleteSession;

document.addEventListener('DOMContentLoaded', ()=> {
  const groot = document.getElementById('groot');
  ReactDOM.render(<h1>YAYYYYY</h1>, groot);
});