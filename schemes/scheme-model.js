
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

function findById() {

}

function findSteps() {

}

function add() {

}

function update() {

}

function remove() {

}