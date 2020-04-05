export default {
    
    
    extend(context) {


    firebase.auth().onAuthStateChanged(function(user) {
        
        if (user) {
       // User is signed in.
          
        context.uid = user.uid;

        context.loggedIn = true;

        localStorage.setItem("userId",user.uid);

        context.email = user.email
        }

        else {

            // debugger;
            // context.uid = null;
            //
            // context.loggedIn = false;
            //
            // localStorage.setItem("userId",context.uid);
            //
            // context.email = null;

        }
      });

       return context.loadPartials({

        header:"../views/shared/header.hbs ",
        footer:"../views/shared/footer.hbs "
        })





    }
}

