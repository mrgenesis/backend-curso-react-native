module.exports = {
	client: 'postgresql',
	connection: {
		database: process.env.DB_NAME, //'tasks',
		user: process.env.DB_USER, //'postgres',
		password: process.env.DB_PASSWORD, //'123456'
		host: 'tiny.db.elephantsql.com'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
