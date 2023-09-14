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
