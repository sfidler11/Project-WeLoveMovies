const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//confirms that the movie exists by validating movieId, returns an error message if not
async function validateMovie(req, res, next) {
    const { movieId } = req.params;
    const movies = await moviesService.list();
    const foundMovie = movies.find((movie) => movieId == movie.movie_id);
    if(foundMovie) {
        res.locals.movie = foundMovie;
        return next();
    }

    next({
        status:404, 
        message:`Movie cannot be found: Id ${movieId}`
    });
 
}

async function list(req, res, next) {
    try{
        const data = await moviesService.list(req.query.is_showing);
        res.json({ data });
    }
    catch(error) {
        next(error);
    }
}

async function read (req, res, next) {
    try {
        const { movieId } = req.params;
        const data = await moviesService.read(movieId);
        res.json({ data });
    }
    catch(error) {
        next(error);
    }
}

async function readTheaters(req, res, next) {
    res.json({ data: await moviesService.readTheaters(req.params.movieId)})
}

async function readReviews(req, res, next) {
    res.json({ data: await moviesService.readReviews(req.params.movieId)})
}

module.exports = {
    list,
    read: [validateMovie, read],
    readTheaters,
    readReviews,
}