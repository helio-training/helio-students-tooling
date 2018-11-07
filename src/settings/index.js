import Rebase from 're-base'
import Firebase from 'firebase'
import 'firebase/firestore'


const CONFIG = {
  apiKey: 'AIzaSyAVV8Bh8ZOH4BWBYz3BOTPFHc2E3IE5SkI',
  authDomain: 'helio-students-8f42a.firebaseapp.com',
  databaseURL: 'https://helio-students-8f42a.firebaseio.com',
  projectId: 'helio-students-8f42a',
  storageBucket: 'helio-students-8f42a.appspot.com',
  messagingSenderId: '450445212583',
}

const app = Firebase.initializeApp(CONFIG)
const firestore = app.firestore()
firestore.settings({ timestampsInSnapshots: true })

const base = Rebase.createClass(firestore)

export {
  app,
  base,
}

