const path = require('path')
const config = require('config')
const parse = require('url-parse')

const {
    protocol,
    hostname,
    port,
    pathname,
    username,
    password
} = parse(config.get('database.url'))

require('sql-migrations').run({
    migrationsDir: path.resolve(__dirname, 'db/migrations'),
    host: hostname,
    port,
    db: pathname.replace('/', ''),
    user: username,
    password,
    adapter: protocol.replace(':', '')
})
