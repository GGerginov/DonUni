
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD6s0TYbGx4dvuJj-QITXcSV6jhiX9Nxak",
    authDomain: "fir-2d25d.firebaseapp.com",
    databaseURL: "https://fir-2d25d.firebaseio.com",
    projectId: "fir-2d25d",
    storageBucket: "fir-2d25d.appspot.com",
    messagingSenderId: "294867513798",
    appId: "1:294867513798:web:3cd2d6d8b1f6bc400bc2c7",
    measurementId: "G-DVK5M6E3KN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // RULES FOR FIREBASE
  // Allow read/write access on all documents to any user signed in to the application
  // service cloud.firestore {
  //   match /databases/{database}/documents {
  //     match /{document=**} {
  //       allow read, write: if request.auth.uid != null;
  //     }
  //   }
  // }