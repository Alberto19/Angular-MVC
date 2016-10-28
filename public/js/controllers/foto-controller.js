angular.module('main').controller('FotoController',
 function($scope, $http, $routeParams){

	$scope.foto = {};
    $scope.mensagem = '';

	if($routeParams.fotoId){
		$http.get('v1/fotos/'+ $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível obeter a foto';
		});
	}

	$scope.submeter = function(){
        if($scope.formulario.$valid){
			if($scope.foto._id){
				$http.put('v1/fotos/'+ $scope.foto._id, $scope.foto)
				.success(function(){
					$scope.foto ={};
					$scope.mensagem = 'Foto alterada com sucesso';
				})
				.error(function(){
					$scope.mensagem = 'Não foi possível Alterar a foto';
				});
			}else{
				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto ={};
					$scope.mensagem = 'Foto cadastrada com sucesso';
				})
				.error(function(){
					$scope.mensagem = 'Não foi possível cadastrar a foto';
				});
			}
        }
    };
});

