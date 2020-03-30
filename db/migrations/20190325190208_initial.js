exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('players', table => {
			table.increments('id').primary()
			table.string('name')
			table.string('bonus_points')
		}),

		knex.schema.createTable('teams', table => {
			table.increments('id').primary()
			table.integer('player_id').unsigned()
			table.foreign('player_id').references('players.id')
			table.string('name')
			table.string('drafted_by')
			table.integer('points')
			table.boolean('is_eliminated')
		}),

		knex.schema.createTable('bonus', table => {
			table.increments('id').primary()
			table.integer('player_id').unsigned()
			table.foreign('player_id').references('players.id')
			table.string('name')
			table.integer('points')
			table.string('description')
		}),
	])
}

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('teams'),
		knex.schema.dropTable('bonus'),
		knex.schema.dropTable('players'),
	])
}
