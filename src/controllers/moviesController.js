const db = require('../../database/models/index.js');

const moviesController = {
    list : (req, res) => {
        db.Movie.findAll()
        .then(movies => {
            res.render('moviesList', {movies : movies});
        })
        .catch(err => {
            console.log(err);
        })
    },

    detail : (req, res) => {
        db.Movie.findByPk(req.params.id,
            {include : [
                {association : 'genres',
                attributes : ['name']},
                {association : 'actors'},
            ]})
        .then(movie => {
            res.render('moviesDetail', {movie : movie});
        })
        .catch(err => {
            console.log(err);
        })
    },

    new : (req, res) => {
        db.Movie.findAll({
            order : [['release_date', 'DESC']],
            limit : 5
        })
        .then(movies => {
            res.render('newestMovies', {movies : movies});
        })
        .catch(err => {
            console.log(err);
        })
        
    },

    recomended : (req, res) => {
        db.Movie.findAll({
            order : [['rating', 'DESC']],
            limit : 5
        })
        .then(movies => {
            res.render('recommendedMovies', {movies : movies});
        })
        .catch(err => {
            console.log(err);
        })
    },

    add : (req, res) =>{
        db.Genre.findAll()
        .then(genres =>
            res.render('moviesAdd', {genres : genres})
        )
    },

    create : (req, res) =>{

        db.Movie.create({
            title : req.body.title,
            rating : req.body.rating,
            awards : req.body.awards,
            release_date : req.body.release_date,
            length : req.body.length,
            genre_id: req.body.genre
        })
        .then(()=>{
            res.redirect('/movies')
        })
        .catch(err => {
            console.log(err);
        })
    },

    edit : (req, res) =>{
        db.Movie.findByPk(req.params.id)
        .then(movie => {
           let year = movie.release_date.getFullYear();
           let month = (movie.release_date.getMonth() + 1);
           let day = movie.release_date.getDate();

           day < 10 ? day = '0' + day : day;
           month < 10 ? month = '0' + month : month;
           
           let shortDate = year + '-'  + month + '-' + day
            
           res.render('moviesEdit', {movie : movie, shortDate : shortDate});
        })
        .catch(err => {
            console.log(err);
        })
    },

    update : (req, res) =>{
        db.Movie.update(
            {
                title : req.body.title,
                rating : req.body.rating,
                awards : req.body.awards,
                release_date : req.body.release_date,
                length : req.body.length
            },
            {
                where : { id : req.params.id}
            }
        )
        .then(()=>{
            res.redirect('/movies')
        })
        .catch(err => {
            console.log(err);
        })
    },

    delete : (req,res)=>{
        db.Movie.findByPk(req.params.id)
        .then(movie => {
            res.render('moviesDelete', {movie : movie});
        })
        .catch(err => {
            console.log(err);
        })
    },

    destroy : (req, res)=>{
        db.Movie.destroy({
            where : { id : req.params.id}
        })
        .then(()=>{
            res.redirect('/movies')
        })
        .catch(err => {
            console.log(err);
        })
    }
};


module.exports = moviesController;