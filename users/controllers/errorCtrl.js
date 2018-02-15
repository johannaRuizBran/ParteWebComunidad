/**
 * Created by Joha on 16/5/2017.
 */
angular.module('mantenimientoApp')
    .controller('errorCtrl', function($scope,$http,$routeParams) {
        $scope.mensaje = $routeParams.mensaje;
        if ($scope.mensaje == null || $scope.user == "null"){
            $scope.mensaje= " Usuario no logueado";
        }
        else{
            alert("hay mensaje");
        }
    });