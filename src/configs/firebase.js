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

const messaging = firebase.messaging()

export const getToken = () => {
  messaging
    .getToken({
      vapidKey:
        'BOcSnDlBEh9T4yRmZZKNZlgpLVJePQ0BgwFG8vOlvpunzHh8H5rycBUJmA9c027-B-ss4Q-R4rnEGynhsJX-Sj4'
    })
    .then(currentToken => {
      if (currentToken) {
        console.log(currentToken)
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        )
      }
    })
    .catch(err => {
      console.log('An error occurred while retrieving token. ', err)
    })
}
export default firebase
