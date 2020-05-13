
const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
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

function add(schemeData) {
    return db('schemes')
        .insert(schemeData)
        .then(ids => {
            return findById(ids[0])
        })
}

function addStep(step, scheme_id) {
    return db('steps')
        .insert({...step, scheme_id: scheme_id})
        .then(ids => {
            const id = ids[0]
            return db('steps')
                .where({id})
        })
        
}

function update(changes, id) {
    return db('schemes')
        .where({id})
        .update(changes)
        .then(id => {
            return findById(id)
        })
}

function remove(id) {
    return db('schemes')
        .where({id})
        .del()

}