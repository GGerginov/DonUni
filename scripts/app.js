import controllers from '../controllers/index.js';

const app = Sammy('#root',function(){

    this.use('Handlebars','hbs');

    //Home

    this.get('#/home',controllers.homeController.get.home);

    //User
    this.get('#/user/login',controllers.userController.get.login);
    this.get('#/user/register',controllers.userController.get.register);
    this.get('#/user/logout',controllers.userController.get.logout);


    this.post('#/user/login',controllers.userController.post.login);
    this.post('#/user/register',controllers.userController.post.register);

    //Cause

    this.get('#/cause/create',controllers.causeController.get.createCause);
    this.get('#/cause/dashboard',controllers.causeController.get.dashboard);
    this.post('#/cause/create',controllers.causeController.post.createCause);
    this.get('#/cause/details/:causeId',controllers.causeController.get.details);
    this.post('#/cause/details/:causeId',controllers.causeController.post.details);

    this.get('#/cause/close/:causeId',controllers.causeController.get.close);


});

app.run('#/home');