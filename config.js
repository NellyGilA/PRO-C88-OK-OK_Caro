import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDPjAs9Vv58bpphMwyBJ4aFdxD56mapD00",
  authDomain: "app-narrar-historias-768c7.firebaseapp.com",
  databaseURL: "https://app-narrar-historias-768c7-default-rtdb.firebaseio.com",
  projectId: "app-narrar-historias-768c7",
  storageBucket: "app-narrar-historias-768c7.appspot.com",
  messagingSenderId: "548556296290",
  appId: "1:548556296290:web:bdc3625707cd4963e1413b",
  measurementId: "G-L2Z667JRYV"
};

/*
const firebaseConfig = {          // db Caro
  apiKey: "AIzaSyBTmL8A26DD_jZgdVr65Hl0Aq1QYpoN-VE",
  authDomain: "pruebaapp-4bab8.firebaseapp.com",
  databaseURL: "https://pruebaapp-4bab8-default-rtdb.firebaseio.com",
  projectId: "pruebaapp-4bab8",
  storageBucket: "pruebaapp-4bab8.appspot.com",
  messagingSenderId: "927735504389",
  appId: "1:927735504389:web:38007ec6c3a8830a16866c",
};*/


if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();