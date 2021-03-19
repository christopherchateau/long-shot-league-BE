module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres://localhost/longshotleague',
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds/dev',
		},
		useNullAsDefault: true,
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL + `?ssl=false`,
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds/prod',
		},
		useNullAsDefault: true,
	},
}
