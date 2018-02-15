angular.module('mantenimientoApp')
    .controller('homeCtrl', function($scope,$http) {
        //para la paginación
        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $scope.pages = [];

        $scope.user = sessionStorage.getItem("user");
        if ($scope.user == null || $scope.user == "null"){
            $(location).attr('href',config.errorPage);
        }
        $scope.valorSelect = "N";
        var tipoUsuario = "N";
        var ur = config.ip+"Usuarios/obtenerListaUsuarios/" + tipoUsuario;
        console.log("ur: "+ur);
        $http({
            method: "GET",
            url: ur
        }).success(function (result) {
            $scope.personas = result;

            var usuarios=$scope.personas;
            $scope.pages.length = 0;
            var ini = $scope.currentPage - 4;
            var fin = $scope.currentPage + 5;
            if (ini < 1) {
                ini = 1;
                if (Math.ceil(usuarios.length / $scope.pageSize) > 10)
                    fin = 10;
                else
                    fin = Math.ceil(usuarios.length / $scope.pageSize);
            } else {
                if (ini >= Math.ceil(usuarios.length / $scope.pageSize) - 10) {
                    ini = Math.ceil(usuarios.length / $scope.pageSize) - 10;
                    fin = Math.ceil(usuarios.length / $scope.pageSize);
                }
            }
            if (ini < 1) ini = 1;
            for (var i = ini; i <= fin; i++) {
                $scope.pages.push({
                    no: i
                });
            }

            if ($scope.currentPage >= $scope.pages.length)
                $scope.currentPage = $scope.pages.length - 1;

        }).error(function(error){
            swal(
                'ERROR...',
                'No se ha podido acceder a la base de datos correctamente!',
                'error'
            );
        });

        $scope.mostrarLista = function() {

            tipoUsuario = $scope.valorSelect;
            var ur = config.ip+"Usuarios/obtenerListaUsuarios/" + tipoUsuario;
            console.log("ur: "+ur);
            $http({
                method: "GET",
                url: ur,
            }).success(function (result) {
                $scope.personas = result;
            }).error(function(error){
                swal(
                    'ERROR...',
                    'No se ha podido acceder a la base de datos correctamente!',
                    'error'
                );
            });
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

            //obtener
            var ur = config.ip+"Usuarios/obtenerListaUsuarios/" + tipoUsuario;
            console.log("ur: "+ur);
            $http({
                method: "GET",
                url: ur
            }).success(function (result) {
                swal(
                    'Se ha realizado exitosamente!',
                    'Presione el botón para continuar!',
                    'success'
                );
                $scope.personas = result;
            }).error(function(error){
                alert("No ");
            });
        };

        $scope.setPage = function(index) {
            $scope.currentPage = index - 1;
        };
    })
    .filter('startFromGrid', function() {
        return function(input, start) {
            start = +start;
            return input.slice(start);
        }
    });