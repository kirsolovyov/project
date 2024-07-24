"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const lastFilmName = prompt("Один из последних посмотренных фильмов?", ""),
  howRateHim = +prompt("На сколько цените его?", "");

personalMovieDB.movies[lastFilmName] = howRateHim;

console.log(personalMovieDB);
