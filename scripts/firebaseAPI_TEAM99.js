//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyB0dn4xO5HECCOeHUwMDWuS57ME3AKQFsY",
  authDomain: "comp1800-202410-demo-e79eb.firebaseapp.com",
  projectId: "comp1800-202410-demo-e79eb",
  storageBucket: "comp1800-202410-demo-e79eb.appspot.com",
  messagingSenderId: "1044308316503",
  appId: "1:1044308316503:web:75264c3eaa6779615fae12"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
