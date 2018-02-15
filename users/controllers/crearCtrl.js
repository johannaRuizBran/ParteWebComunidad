/**
 * Created by Juliana on 17/04/2017.
 */

angular.module('mantenimientoApp')
    .controller('crearCtrl', function($scope,$http) {
        $scope.tipoUsuario = "Profesor";
        $scope.user = sessionStorage.getItem("user");
        if ($scope.user == null || $scope.user == "null"){
            $(location).attr('href',config.errorPage);
        }

        $scope.crear = function crear() {
            var tipoUVar = $scope.tipoUsuario;
            var nombreVar = $scope.nombre;
            var primerApellidoVar = $scope.Apellido1;
            var segundoApellidoVar = $scope.Apellido2;
            var nombreUsuarioVar = $scope.nombreUsuario;
            var contrasenna1Var = $scope.contrasena;
            var contrasenna2Var = $scope.confirmarContrasena;
            var telefVar = $scope.telefono;
            var correoVar = $scope.correo;

            var tipoUsuario = "N";

        /*    alert("\nInfo: "+ tipoUVar+" "+nombreVar+" "+primerApellidoVar+" "+segundoApellidoVar+" "+contrasenna1Var+
                " "+contrasenna2Var+" "+telefVar+" "+correoVar);
         */
            if (tipoUVar== null || nombreVar == null ||primerApellidoVar== null||segundoApellidoVar== null||
                contrasenna1Var== null|| contrasenna2Var== null || telefVar == null || correoVar == null){
                swal(
                    'ERROR...',
                    'Posibles datos nulos o sin valor (Espacios en blanco)!',
                    'error'
                );
                return;
            }

            if (contrasenna2Var != contrasenna1Var){
                swal(
                    'ERROR...',
                    'Las contraseñas digitadas no coinciden!',
                    'error'
                );
                return;
            }

            var usuarioObjeto = $.param({nombreUsuario: nombreUsuarioVar,contrasena: contrasenna1Var,
                nombre: nombreVar,apellido1:primerApellidoVar,apellido2:segundoApellidoVar,correo:correoVar,
                telefono:telefVar,rol:tipoUVar,activo:"No"});

            var url = config.ip+"Usuarios/insertarUsuario/"+"S";
            $http({
                method: "POST",
                url: url,
                data: usuarioObjeto,
                headers:  {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (result) {
                swal(
                    'Se ha realizado exitosamente!',
                    'Presione el botón para continuar!',
                    'success'
                );
                window.location.href = ('#/user/home');
            }).error(function(error){
                swal(
                    'ERROR...',
                    'No se ha podido acceder a la base de datos correctamente!',
                    'error'
                );
            });
        };
    });