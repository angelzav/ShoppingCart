var app = angular.module('shoppingCartApp',['ngRoute']);

app.controller('mainCtrl',['$scope','$http', function($scope, $http){
  

	$scope.setActive = function(Option){
		$scope.mInicio	= "";
		$scope.mDetalle	= "";
		$scope.mCarrito	= "";
		$scope.mInventario	= "";

		$scope[Option] = "active";
	};

    $scope.compras = [
         {
            "id": 8,
            "nombre": "Audífonos Bluetooth XYZ",
            "descripcion": "Audífonos inalámbricos con cancelación de ruido.",
            "detalle": "En la calle, en el camión o en la oficina, ten siempre a mano tu audífono Soundcore by Anker y ¡escápate de la rutina por un rato! Podrás disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno. El formato perfecto para ti El diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
            "precio": 1189.99,
            "imagen": "8.jpg"
        },
        {
            "id": 9,
            "nombre": "Audífonos Deportivos ABC",
            "descripcion": "Audífonos resistentes al agua ideales para actividades deportivas.",
            "detalle": "En la calle, en el camión o en la oficina, ten siempre a mano tu audífono Soundcore by Anker y ¡escápate de la rutina por un rato! Podrás disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno. El formato perfecto para ti El diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
            "precio": 1149.99,
            "imagen": "9.jpg"
        }
    ];


    $scope.total = 0;
    $scope.setTotal = function(compra){
        if(compra){
            $scope.total += compra.precio;
        }
    }

    $scope.DetalleProducto = function(id){
        
        location.href = `#!/detalle/${id}`;
    };

    $scope.AgregarCarrito = function (prod) {
        if(prod){
            $scope.compras.push({
                id: prod.id,
                nombre: prod.nombre,
                descripcion: prod.descripcion,
                detalle: prod.detalle,
                precio: prod.precio,
                imagen: prod.imagen
                });
        }

	};

    $scope.EliminaDeCarrito = function(index) {
        $scope.total = $scope.total- $scope.compras[0].precio;
        console.log($scope.compras[0].precio);
		$scope.compras.splice(index,1);
	}

	$scope.productos = [
        {
          "id": 1,
          "nombre": "Audífonos Bluetooth XYZ",
          "descripcion": "Audífonos inalámbricos con cancelación de ruido.",
          "detalle": "En la calle, en el camión o en la oficina, ten siempre a mano tu audífono Soundcore by Anker y ¡escápate de la rutina por un rato! Podrás disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno. El formato perfecto para ti El diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "precio": 10000,
          "imagen": "1.jpg"
      },
      {
          "id": 2,
          "nombre": "Audífonos Deportivos ABC",
          "descripcion": "Audífonos resistentes al agua ideales para actividades deportivas.",
          "detalle": "En la calle, en el camión o en la oficina, ten siempre a mano tu audífono Soundcore by Anker y ¡escápate de la rutina por un rato! Podrás disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno. El formato perfecto para ti El diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "precio": 49.99,
          "imagen": "2.jpg"
      },
      {
          "id": 3,
          "nombre": "Audífonos Profesionales",
          "descripcion": "Audífonos de alta calidad para músicos y productores de música.",
          "detalle": "En la calle, en el camión o en la oficina, ten siempre a mano tu audífono Soundcore by Anker y ¡escápate de la rutina por un rato! Podrás disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno. El formato perfecto para ti El diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "precio": 149.99,
          "imagen": "3.jpg",
		  "stock": 48
      },
      {
          "id": 4,
          "nombre": "Audífonos  QRS",
          "descripcion": "XXXAudífonos premium con tecnología de cancelación de ruido activa.",
          "detalle": "En la calle, en el camión o en la oficina, ten siempre a mano tu audífono Soundcore by Anker y ¡escápate de la rutina por un rato! Podrás disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno. El formato perfecto para ti El diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "precio": 199.99,
          "imagen": "4.jpg",
		  "stock": 98
      },
       {
           "id": 5,
           "nombre": "Audífonos In-Ear EFG",
           "descripcion": "Audífonos compactos y ligeros ideales para viajes.",
           "detalle": "QQQ En la calle, en el camión o en la oficina, ten siempre a mano tu audífono Soundcore by Anker y ¡escápate de la rutina por un rato! Podrás disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno. El formato perfecto para ti El diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
           "precio": 29.99,
           "imagen": "5.jpg",
	 	  "stock": 75
       },
       {
           "id": 6,
           "nombre": "Audífonos Gaming RGB",
           "descripcion": "Audífonos diseñados para gamers con iluminación RGB personalizable.",
           "detalle": "En la calle, en el camión o en la oficina, ten siempre a mano tu audífono Soundcore by Anker y ¡escápate de la rutina por un rato! Podrás disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno. El formato perfecto para ti El diseño over-ear genera una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
           "precio": 79.99,
           "imagen": "6.jpg",
	 	  "stock": 100
       }

    ];
}]);