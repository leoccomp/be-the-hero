const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { errors } = require("celebrate");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/* Metodos HTTP

GET - buscar informações do back-end
POST - criar uma informação no back-end
PUT - alterar uma informação no back-end
DELETE - excluir uma informação no back-end

*/

/* Tipos de Parametros

Query - parametros nomeados enviados na rota após o simbolo ? (filtros, paginação) - acesso: req.query
Route Params - parametros utilizados para identificar recursos - acesso: req.params
Request Body - corpo da requisição utilizado para criar ou alterar recursos - acesso: req.body - necessita configurar 'app.use(express.json())'

*/

/* Bancos de Dados

SQL: MySQL, SQLite, Postgres, Oracle, MS SQL
NoSQL: MongoDb, CountDb

*/

/* Comunicação com DB

Driver: SELECT * FROM...
Query Builder: table('users').select('*')

*/

module.exports = app;
