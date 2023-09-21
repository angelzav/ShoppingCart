app.controller('detalleCtrl', ['$scope', '$routeParams', function($scope, $routeParams){

	//$scope.setActive("mDetalle");

	$scope.codigo = $routeParams.codigo;

	$scope.Regresar = () => {
		location.href = `#!/`;
	};

	// $scope.AgregarCarrito = () => {
	// 	console.log('Agregar al carrito');
	// 	$scope.carrito.articulos.push(1);
	// 	console.log($scope.carrito.articulos);
	// };

}]);