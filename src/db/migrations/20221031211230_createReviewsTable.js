
exports.up = function(knex) {
    return knex.schema.createTable("reviews", (table) => {
        table.increments("review_id").primary();
        table.text("content");
        table.integer("score");
        table.foreign("critic_id");
        table.foreign("movie_id");
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("reviews");

};
