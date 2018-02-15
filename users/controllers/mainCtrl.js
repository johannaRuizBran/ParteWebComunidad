angular.module('mantenimientoApp')
.controller('mainCtrl', ['$scope', function($scope,$routeParams) {
        $scope.user = sessionStorage.getItem("user");
        $scope.email = sessionStorage.getItem("correo");
        if ($scope.user == null || $scope.user == "null"){
                $(location).attr('href',config.errorPage);
        }
        window.location.href = ('#/notificacion');
        $scope.cerrarSesion = function() {
                sessionStorage.setItem("user",null);
                sessionStorage.setItem("correo",null);
                $(location).attr('href',config.indexPage);
        };
}]);