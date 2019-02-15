# db-migrations-and-seeding-demo
PoC for db migrations and seeding (example of simple blog)

Setup db with ```docker-compose up -d```

Migrate up with ```node migrations.js migrate```

Seed db with fake data ```npm run knex seed:run create_fake_data```

You can see db content on [link](http://localhost:8081)
