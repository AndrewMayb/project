
const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
prompt('Сколько фильмов вы уже посмотрели?', '')
alert("Alert")


const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

const
  a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцените его?', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = prompt('На сколько оцените его?', '')

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

console.log(personalMovieDB)
