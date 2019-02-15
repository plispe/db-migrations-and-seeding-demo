const R = require('ramda')
const faker = require('faker')
faker.locale = "en_US"
// faker.locale = 'cs'
const usersCount = 25
const articlesCount = 500
const tagsCount = 18

const usersTable = 'users'
const tagsTable = 'tags'
const articlesTable = 'articles'
const taggingsTable = 'taggings'

const createRandomUser = () => {
  return {
    email: faker.internet.email(),
    password_digest: faker.internet.password()
  }
}

const createRandomArticle = () => {
  return {
    title: faker.random.words(faker.random.number({min: 3, max: 7})),
    body: faker.lorem.paragraphs(faker.random.number({min: 5, max: 12})),
    author_id: faker.random.number({min: 1, max: usersCount})
  }
}

const createRandomTagging = () => {
  return {
    tag_id: faker.random.number({min: 1, max: tagsCount})
  }
}

const addIdsToListOfObjects = (list) => {
  const ids = R.range(1, list.length + 1)
  return R.zipWith((value, id) => R.mergeDeepLeft({id}, value), list, ids)
}

const users = addIdsToListOfObjects(R.times(createRandomUser, usersCount))
const tags = addIdsToListOfObjects([
  {name: 'Behavioral Psychology'},
  {name: 'Habits'},
  {name: 'Motivation'},
  {name: 'Procrastination'},
  {name: 'Creativity'},
  {name: 'Decision Making'},
  {name: 'Focus'},
  {name: 'Mental Toughness'},
  {name: 'Constant Improvement'},
  {name: 'Deliberate Practice'},
  {name: 'Goal Setting'},
  {name: 'Productivity'},
  {name: 'Better Sleep'},
  {name: 'Eating Healthy'},
  {name: 'Strength Training'},
  {name: 'Life Lessons'},
  {name: 'Reading List'},
  {name: 'Self-Improvement'}
])
const articles = addIdsToListOfObjects(R.times(createRandomArticle, articlesCount))

const taggings = []

for (const article of articles) {
  const tags = R.uniq(R.times(createRandomTagging, faker.random
                .number({min: 2, max: 5}))
                .map(i => R.mergeDeepLeft({article_id: article.id}, i)))
  taggings.push(...tags)
}

exports.seed = async (knex, Promise) => {
  await knex(usersTable).del()
  await knex(tagsTable).del()
  await knex(articlesTable).del()
  await knex(taggingsTable).del()
  await knex(usersTable).insert(users)
  await knex(tagsTable).insert(tags)
  await knex(articlesTable).insert(articles)
  await knex(taggingsTable).insert(taggings)
}

