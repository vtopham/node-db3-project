
const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
   return db.select('*')
        .from('schemes')
}

function findById(id) {
    return db('schemes')
        .where({id})
}

function findSteps(scheme_id) {
    return db('steps')
        .where({scheme_id})
}

function add() {

}

function update() {

}

function remove() {

}