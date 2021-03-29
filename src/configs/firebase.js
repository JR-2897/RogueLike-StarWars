import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAjbd6AQtuYb_poMXfBvwS69LevR7YT9JE',
  authDomain: 'roguelike-starwars.firebaseapp.com',
  projectId: 'roguelike-starwars',
  storageBucket: 'roguelike-starwars.appspot.com',
  messagingSenderId: '640406967095',
  appId: '1:640406967095:web:126f275256bbff326480b2'
}

firebase.initializeApp(firebaseConfig)

export default firebase
