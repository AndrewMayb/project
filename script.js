
const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

// const a = prompt ()