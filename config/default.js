module.exports = {
    database: {
        url: process.env.DATABASE_URL || 'pg://postgres:postgres@localhost:5432/postgres'
    }
}