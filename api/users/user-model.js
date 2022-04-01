const db = require('../../data/dbConfig');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('user');
}

function getById(id) {
  return db('user')
    .where({ id })
    .first();
}

function insert(post) {
  return db('user')
    .insert(post)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('user')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('user')
    .where('id', id)
    .del();
}
