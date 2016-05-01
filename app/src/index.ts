import './typings.ts';
import signInModule from './signin/signin';

angular
    .module('package', [
        'my.templates',
        'ui.router',
        signInModule.name
    ])
    .config(($stateProvider:angular.ui.IStateProvider,
             $urlRouterProvider:angular.ui.IUrlRouterProvider):void => {

        $stateProvider
            .state('index', {
                url: '',
                templateUrl: 'signin/views/index.html',
                controller: 'signInCtrl',
                controllerAs: 'main'
            });
    });
