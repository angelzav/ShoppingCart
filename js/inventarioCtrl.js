app.controller('inventarioCtrl', ['$scope', function($scope){
	

	$scope.setActive("mInventario");

	let nuevoProducto =   {};


	$scope.AgregarProducto = function(){
		$scope.productos.push(this.nuevoProducto);
		$scope.nuevoProducto = {};
	}

	$scope.EliminaDeInventario = function(index) {
		$scope.productos.splice(index,1);
	}

}]);