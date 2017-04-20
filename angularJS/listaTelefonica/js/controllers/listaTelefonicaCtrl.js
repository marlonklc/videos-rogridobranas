angular.module("listaTelefonica").controller("listaTelefonicaCtrl", 
	function($scope, $http){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function () {
		$http.get('http://localhost:3412/contatos').then(function (response) {
			$scope.contatos = response.data;
		})
		.catch(function (error) {
			$scope.message = "Aconteceu um problema: " + error.statusText;
		});
	}

	var carregarOperadoras = function () {
		$http.get('http://localhost:3412/operadoras').then(function (response) {
			$scope.operadoras = response.data;
		});
	}

	$scope.adicionarContato = function (contato) {
		contato.data = new Date();
		$http.post("http://localhost:3412/contatos", contato).then(function (response) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	}

	$scope.classe1 = "selecionado";
	$scope.classe2 = "negrito";

	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			return !contato.selecionado;
		});
	}

	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function(contato) {
			return contato.selecionado;
		});
	}

	$scope.ordernarPor = function (campo) {
		$scope.criterioOrdenacao = campo
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao
	}

	carregarContatos();
	carregarOperadoras();
});