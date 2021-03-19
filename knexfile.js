module.exports = {
	development: {
		client: 'pg',
		ssl: { rejectUnauthorized: false },
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
		ssl: { rejectUnauthorized: false },
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds/prod',
		},
		useNullAsDefault: true,
	},
}
