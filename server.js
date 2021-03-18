const { Pool } = require('pg')

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
})
console.log('asdf', pool)

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)
	next()
})

app.set('port', process.env.PORT || 3001)

app.get('/api/v1/longshotleague/players', (req, resp) =>
	database('players')
		.select()
		.then(visitor => resp.status(200).json(visitor))
		.catch(error => resp.status(500).json({ error: error.message }))
)

app.get('/api/v1/longshotleague/teams', (req, resp) =>
	database('teams')
		.select()
		.then(visitor => resp.status(200).json(visitor))
		.catch(error => resp.status(500).json({ error: error.message }))
)

app.patch('/api/v1/longshotleague/team/', (req, resp) => {
	const { name, points, is_eliminated } = req.body
	{
		database('teams')
			.where('name', name)
			.update({ points, is_eliminated })
			.then(() =>
				resp.status(202).json(`${name} data sucessfully updated!`)
			)
			.catch(error => resp.status(500).json({ error: error.message }))
	}
})

app.get('/api/v1/longshotleague/bonus', (req, resp) =>
	database('bonus')
		.select()
		.then(visitor => resp.status(200).json(visitor))
		.catch(error => resp.status(500).json({ error: error.message }))
)

app.post('/api/v1/longshotleague/bonus/', (req, resp) =>
	database('bonus')
		.insert({ ...req.body }, 'id')
		.then(bonus =>
			resp.status(201).json(`new bonus successfully added! - ${bonus}`)
		)
		.catch(error => resp.status(500).json({ error: error.message }))
)

app.delete('/api/v1/longshotleague/bonus/', (req, resp) => {
	const { id } = req.body

	database('bonus')
		.where('id', id)
		.del()
		.then(bonus => resp.status(202).json(`'${bonus}' successfully deleted`))
		.catch(error => resp.status(500).json({ error: error.message }))
})

app.listen(app.get('port'), () =>
	console.log(`longshot league is running on ${app.get('port')}.`)
)

module.exports = app
