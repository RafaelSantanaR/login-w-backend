// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: 'mysql2',
  connection: {
    database: 'hollsign',
    user: 'aluno',
    password: 'senacrs',
    host: '127.0.0.1'
  }
};
