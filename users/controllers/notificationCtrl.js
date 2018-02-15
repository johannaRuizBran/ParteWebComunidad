/**
 * Created by Joha on 20/11/2017.
 */

angular.module('mantenimientoApp')
    .controller('notificationCtrl', function($scope,$http) {
        $scope.user = sessionStorage.getItem("user");
        if ($scope.user == null || $scope.user == "null"){
            $(location).attr('href',config.errorPage);
        }

        var ur = config.ip+"Usuario/obtener/sinPermiso";
        console.log("ur: "+ur);
        $http({
            method: "GET",
            url: ur
        }).success(function (result) {
            $scope.personas = result;

        }).error(function(error){
            swal(
                'ERROR...',
                'No se ha podido acceder a la base de datos correctamente!',
                'error'
            );
        });

        $scope.agregar = function agregar(persona) {
            //agregar
            var ur = config.ip+"Usuario/cambiarActivo/" + persona;
            $http({
                method: "POST",
                url: ur
            }).success(function (result) {
                swal(
                    'Se ha realizado exitosamente!',
                    'Presione el botón para continuar!',
                    'success'
                );
            }).error(function(error){
                swal(
                    'ERROR...',
                    'No se ha podido acceder a la base de datos correctamente!',
                    'error'
                );
            });
            window.location.reload();
        };

        $scope.eliminar = function eliminar(valorEliminar) {
            console.log("valor Eliminar: "+valorEliminar);

            //eliminar
            var ur = config.ip+"Usuarios/eliminarUsuario/" + valorEliminar;
            $http({
                method: "POST",
                url: ur
            }).success(function (result) {
                swal(
                    'Se ha realizado exitosamente!',
                    'Presione el botón para continuar!',
                    'success'
                );
            }).error(function(error){
                swal(
                    'ERROR...',
                    'No se ha podido acceder a la base de datos correctamente!',
                    'error'
                );
            });
            window.location.reload();
        };
    });
