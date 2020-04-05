export default{

    register(data){

        let email = data.params.username;

        let password = data.params.password;

        
        
        return firebase.auth().createUserWithEmailAndPassword(email, password);
  

    },
    login(data){


        let email = data.params.username;

        let password = data.params.password;

    
        return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });

    },
    logout(){

        return firebase.auth().signOut();

    }

};