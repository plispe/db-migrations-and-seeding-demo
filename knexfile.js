const path = require('path')
const config = require('config')

module.exports = {
    client: 'pg',
    connection: config.get('database.url'),
    seeds: {
        directory: path.resolve(__dirname, 'db/seeds')
    }
}