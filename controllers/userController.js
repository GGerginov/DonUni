import models from '../models/indexModel.js'
import helper from '../utills/helper.js'


export default{

    get:{

        login(context){

            helper.extend(context).then(function(){

                this.partial("../views/user/login.hbs");


            })
        },
        register(context){

            helper.extend(context).then(function(){

                this.partial("../views/user/register.hbs");

            })
        },
        logout(context){


            models.userModel.logout(context).then(response =>{

                context.redirect('#/home');

            });




        }
    },

    post :{

        
        login(context){

            
            models.userModel.login(context).then((respone) =>{

                context.loggedIn = true;
                context.username = context.params.username;
                context.userId = respone.user.uid;

            
                context.redirect('#/home');
                debugger
            })
            .catch(e => console.error(e))
            

        },


        register(context){

            
            models.userModel.register(context).then((respone) =>{

                context.redirect('#/user/login')
            })
            .catch(e => console.error(e))

            
        }

    }


 }