# be-the-hero (semana Omnistack 11 rocketseat)

Be The Hero é um portal + mobile e tem por objetivo conectar pessoas com ONG's de caridade (cuidam de animais, pessoas com alguma necessidade específica, etc). As ONG's podem se cadastrar e incluir seus casos. As pessoas podem acessar o portal ou o app, escolher um dos casos cadastrados e enviar um email ou entrar em contato pelo Whatsapp para ajudar.

## Content

```
backend (nodeJS)
frontend (reactJS)
mobile (react native com expo)
```

Backend node desenvolvido utilizando Knex como query builder, banco de dados SQLite3. Framework JEST para testes unitários.

### Run backend

1 - dependências:

```
npm install
```

2 - scripts do Knex para migrates e seeds:

```
npm run knex:migrate
npm run knex:seed
```

3 - script para iniciar a API:

```
npm run start
```

acesse o endereço: ```http://localhost:3333```


#### Screenshots
<table>
	<tr>
		<th width="100%">
			Web Interface<br>
		</th>
	</tr>
	<tr>
		<td>
			<img width="1080" src="https://raw.githubusercontent.com/leoccomp/be-the-hero/master/Screen1.jpeg">
		</td>
	</tr>
</table>