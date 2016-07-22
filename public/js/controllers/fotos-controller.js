angular.module('alurapic').controller('FotosController', function($scope, $http){

	$scope.fotos = [
		{
			titulo: 'Leão',
			url: 'http://www.labcriativo.com.br/wp-content/uploads/2013/04/As-melhores-capas-para-o-Facebook-43.jpg' 
		},
		{
			titulo: 'Leão 2',
			url: 'http://www.labcriativo.com.br/wp-content/uploads/2013/04/As-melhores-capas-para-o-Facebook-43.jpg' 
		},
	];

	$http.get('v1/fotos').success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(erro){
		console.log(erro);
	});


/*	var promise = $http.get('v1/fotos');
	promise.then(function(retorno) {
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(error)
	});
	*/
});