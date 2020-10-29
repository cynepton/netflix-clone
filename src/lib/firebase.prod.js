import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Do not uncomment unless you're seeding for the first time
// The only reason it hasn't been deleted is for reference purposes
// import { seedDatabase } from '../seed';

// We need to somehow seed the database

// We need the config here
const config = {
    apiKey: "AIzaSyAV767uPdSPU939tMqwQx93Fa0v0psiyWw",
    authDomain: "netflix-clone-dc7ab.firebaseapp.com",
    databaseURL: "https://netflix-clone-dc7ab.firebaseio.com",
    projectId: "netflix-clone-dc7ab",
    storageBucket: "netflix-clone-dc7ab.appspot.com",
    messagingSenderId: "366388699704",
    appId: "1:366388699704:web:22feed2413ab1df6fabccd"
}

const firebase = Firebase.initializeApp(config)

// Do not uncomment unless you're seeding for the first time
// The only reason it hasn't been deleted is for reference purposes
//seedDatabase(firebase)

export { firebase };