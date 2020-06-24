import models from '../models/indexModel.js'
import helper from '../utills/helper.js'
import homeController from './homeController.js';


export default {

    get: {

        createCause(context){

            helper.extend(context).then(function(){

                this.partial ("../views/cause/createACause.hbs");

            })
        },

        dashboard(context){

            models.causeModel.getAll().then((response) => {
                

                const causes = response.docs.map((d) => {return{...d.data(),id:d.id}});


                context.CAUSES = causes;
                helper.extend(context).then(function () {

                    this.partial("../views/cause/allCauses.hbs");
    
                })
            })

            

        },

        details(context){


            
            
            models.causeModel.details(context.params.causeId).then((response) => {
                
                
                
                context.cause = response.data();
                context.cause.id = context.params.causeId;

                context.canDonate = response.data().uid === localStorage.userId;

                console.log(response.data().donors);
                context.donors = response.data().donors;

                helper.extend(context).then(function (){

                    this.partial('../views/cause/payACause.hbs');
    
                })
    
            })
          

            


        },

        close(context){


            models.causeModel.close(context.params.causeId)

            
            context.redirect('#/cause/dashboard')

        }


    },

    post: {

        createCause(context){

            models.causeModel.create(context.params).then(response =>{

                context.redirect('#/cause/dashboard')
            })
            .catch(e => console.error(e))


        },

        details(context){

            models.causeModel.makeDonation(context.params.causeId,context.params.currentDonation).then(response => {

                let donation = context.params.currentDonation;


                context.redirect('#/cause/dashboard')
                

            })
            .catch(e => {

                console.error(e);
            })

        }

    }
}
