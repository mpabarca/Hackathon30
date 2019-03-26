import * as firebase from 'firebase';

const config = {
apiKey: "AIzaSyB8IwfKQB6YD-zb_UWpJS9j-B3CZIXkqsM",
authDomain: "todo-hack.firebaseapp.com",
databaseURL: "https://todo-hack.firebaseio.com",
projectId: "todo-hack",
storageBucket: "todo-hack.appspot.com",
messagingSenderId: "460595443392"
};
const fire = firebase.initializeApp(config);

export default fire;