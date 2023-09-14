<<<<<<< Updated upstream
<<<<<<< Updated upstream
const { reject } = require('prelude-ls')
const { resolve } = require('uri-js')

const someAsyncTask = (message, callback) => {
  setTimeout(() => {
    console.log(message)
    callback()
  }, 1000)
}

const myLogger = () => {
  console.log('logging')
}

console.log('before')
someAsyncTask('my message', myLogger)
console.log('after')

const someAsyncTaskPromise = function (message,callback){
  return new Promise((resolve,reject)=>{
    someAsyncTask(message ,() => {
      resolve
    }))
  })
}
// someAsyncTaskPromise(callback).then(console.log("finished async task"))

// // const someAsyncTaskPromise
// // convert so we can write someAsyncTaskPromise(message).then
// // and use .then to log the message

// // const someAsyncTaskWrapper
// // const x = someAsyncTaskWrapper(message)
// // console.log(x)

// const someAsyncTaskPromise = function (message) {
//   return new Promise((resolve, reject) => {
//     someAsyncTask(message)
//     resolve(message)
//     reject('error')
//   })
// }

// // const someAsyncTaskWrapper = async function (message){
// //   return message
// // }

// console.log('before async task')
// // const x = someAsyncTask('my message')
// someAsyncTaskPromise('my promise')
//   .then((resolve) => {
//     console.log('resolved')
//     console.log(resolve)
//   })
//   .catch((reject) => console.log(reject))
// console.log('after async task')
// // console.log(x)
=======
=======
>>>>>>> Stashed changes
function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this'

    case 1:
      return `${names[0]} likes this`

    case 2:
      return `${names[0]} and ${names[1]} like this`

    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`

    case 4:
      return `${names[0]}, ${names[1]} and 2 others like this`

    default:
      break
  }
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
