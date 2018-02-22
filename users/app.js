/**
 * Created by Erwin on 25/10/2016.
 */
var app= angular.module('mantenimientoApp',["ngRoute","ngResource"]);
app.config(['$routeProvider',function($routeProvider)
    {
        $routeProvider
            .when("/loginPagina",{
                templateUrl:'index.html',
                controller: 'loginController'
            })
            .when("/notificacion",{
                templateUrl:'notificacion.html',
                controller: 'notificationCtrl'
            })
            .when("/user/crear",{
                templateUrl:'crear/crear.html',
                controller: 'crearCtrl'
            })
            .when("/user/editar/:userName",{
                templateUrl:'editar/editar.html',
                controller: 'editarCtrl'
            })
            .when("/user/error/:mensaje",{
                templateUrl:'VistaError.html',
                controller: 'errorCtrl'
            })
            .when("/user/home",{
                templateUrl:'home/home.html',
                controller: 'homeCtrl'
            })
            .when("/noHayElementos",{
                templateUrl:'noHayArchivos.html'
            })
    }
]);