
app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'inicioCtrl',
		})
		// .when('/detalle', {
		// 	templateUrl: 'views/detalle.html',
		// 	controller: 'detalleCtrl',
		// })
		.when('/detalle/:codigo', {
			templateUrl: 'views/detalle.html',
			controller: 'detalleCtrl',
		})
		.when('/carrito', {
			templateUrl: 'views/carrito.html',
			controller: 'carritoCtrl',
		})
		.when('/inventario', {
			templateUrl: 'views/inventario.html',
			controller: 'inventarioCtrl',
		})
		.otherwise({ 
			redirectTo: '/' ,
		});

});