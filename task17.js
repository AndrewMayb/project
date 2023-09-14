const { reject } = require('prelude-ls')
const { resolve } = require('uri-js')

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function fetchTodos() {
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json())
// }

// fetchTodos()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))

async function fetchAsyncTodos() {
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}

fetchAsyncTodos()
