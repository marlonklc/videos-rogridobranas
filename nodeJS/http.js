var router = require('./router');

var app = router(3412);

var operadoras = [
	{ nome: 'Oi', codigo: 14, preco: 2, categoria: 'Celular' },
	{ nome: 'Vivo', codigo: 15, preco: 1, categoria: 'Celular' },
	{ nome: 'Tim', codigo: 41, preco: 3, categoria: 'Celular' },
	{ nome: 'GVT', codigo: 25, preco: 1, categoria: 'Fixo' },
	{ nome: 'Embratel', codigo: 21, preco: 2, categoria: 'Fixo' }
];

var contatos = [
	{ id: 1, nome: 'Pedro', telefone: '999999999', data: new Date(), cor: 'blue', operadora: operadoras[0] },
	{ id: 2, nome: 'Anna', telefone: '8888888888', data: new Date(), cor: 'yellow', operadora: operadoras[1] },
	{ id:3, nome: 'Maria', telefone: '777777777', data: new Date(), cor: 'red', operadora: operadoras[3] }
];

app.interceptor(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.interceptor(function (req, res, next) {
	res.setHeader('Content-Type', 'application/json;charset=UTF-8');
	next();
});

app.get('/contatos', function (req, res) {
	res.write(JSON.stringify(contatos));
	res.end();
});

app.get('/operadoras', function (req, res) {
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.post('/contatos', function (req, res) {
	var contato = req.body;
	contatos.push(JSON.parse(contato));
	res.end();
});

app.post('/file', function (req, res) {
	res.end();
});

app.options('/file', function (req, res) {
	res.end();
});

app.options('/contatos', function (req, res) {
	res.end();
});