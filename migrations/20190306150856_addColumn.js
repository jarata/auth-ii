
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(tbl) {
        tbl.string('role')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(tbl) {
        tbl.dropColumn('role')
    })
};
