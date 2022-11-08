const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function list(res, res, next) {
    try{
        const data = await moviesService.list();
        res.json({ data });
    }
    catch(error) {
        next(error);
    }
}

module.exports = {
    list,
}