
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBWHYwC9t61ZKf4UKSkCxC6EazFQrqy1uo",
    authDomain: "donuni-66d7e.firebaseapp.com",
    databaseURL: "https://donuni-66d7e.firebaseio.com",
    projectId: "donuni-66d7e",
    storageBucket: "donuni-66d7e.appspot.com",
    messagingSenderId: "900646115239",
    appId: "1:900646115239:web:37339ce85257546f42c882",
    measurementId: "G-54VQX59X7R"
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



