const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

router.get("/movies", async(req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get("/movies/id/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById(id);
        if (movie) {
            return res.status(200).json(movie);
        } else {
            return res.status(404).json("No movie found by this id");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get("/movies/title/:title", async(req, res) => {
    const {title} = req.params;
    try {
        const movie = await Movie.findOne({title});
        if (movie) {
            return res.status(200).json(movie);
        } else {
            return res.status(404).json("No movie found by this title");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get("/movies/year/:year", async(req, res) => {
    const {year} = req.params;
    try {
        const movies = await Movie.find({year});
        if (movies.length > 0) {
            return res.status(200).json(movies);
        } else {
            return res.status(404).json("No movies registered in this year");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})

router.get("/movies/genre/:genre", async(req, res) => {
    const {genre} = req.params;
    try {
        const movies = await Movie.find({genre});
        if (movies.length > 0) {
            return res.status(200).json(movies);
        } else {
            return res.status(404).json("No movies found by this genre");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router;