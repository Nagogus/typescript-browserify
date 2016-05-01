import '../typings.ts';
import signInController from './controllers/signin.controller.ts';


export default angular.module('signIn', [])
    .controller('signInCtrl', signInController);

