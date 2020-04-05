 import helper from '../utills/helper.js'
 
 export default{

    get:{

        home(context){

            helper.extend(context).then(function(){

                this.partial("../views/home/home.hbs");

            })
        }
    }


 }