var app = angular.module('loginModule',["ngRoute"])
    .controller('loginController', function($scope, $http,$rootScope) {
        $scope.accederLogin = function() {

            if ($scope.username && $scope.password) {
                $rootScope.$root.name = 'anonymous';
                var user = $scope.username;
                var pass = $scope.password;
                
                var ur = config.ip+"Usuarios/ObtenerInfo/" + user + "/" + pass;
                $http({
                    dataType: 'JSON',
                    url: ur,
                    data:{}
                }).then(function mySucces(response) {
                    var datos = response.data;
                    if (datos.nombreUsuario == user && datos.contrasena == pass) {
                        sessionStorage.setItem("user",datos.nombreUsuario);
                        sessionStorage.setItem("correo",datos.correo);
                        $(location).attr('href',config.mainPage);
                    }
                    else {
                        swal(
                            'ERROR...',
                            'Datos inconsistentes, no se encontró al usuario!',
                            'error'
                        );
                    }
                }, function myError(response) {
                    swal(
                        'ERROR...',
                        'Error de conexión!',
                        'error'
                    );
                });
                
            } else {
                swal(
                    'ERROR...',
                    'Login inválido!',
                    'error'
                );
            }
        };
    });