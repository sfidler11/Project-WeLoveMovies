const knex = require("../db/connection"); 
const mapProperties = require("../utils/map-properties");

async function read(reviewId) {
    return knex("reviews as r")
        .join("critics as c", "c.critic_id", "r.critic_id")
        .select("r.*", "c.*")
        .where({"review_id":reviewId})
        .first()
        .then(addCritic);
}

const addCritic = mapProperties({
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name",
  });

async function update(updatedReview) {
    return knex("reviews")
        .select("*")
        .where({ review_id: updatedReview.review_id })
        .update(updatedReview, "*");
}

async function destroy(reviewId) {
    return knex("reviews")
        .where({"review_id":reviewId}).del();
}

module.exports = {
    read,
    update,
    delete: destroy,
}