import firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCuZxItTzRTvd7zFkS9MlyalGJGU5t74RE",
  authDomain: "idobata-58d63.firebaseapp.com",
  projectId: "idobata-58d63",
  storageBucket: "idobata-58d63.appspot.com",
  messagingSenderId: "951624758968",
  appId: "1:951624758968:web:3909842283d57a631ce64d"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
	messagesRef.push({ name, text });
}