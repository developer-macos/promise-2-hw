// Promise.all //

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('do1ne!')
    }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('do3ne!')
    }, 500)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('do2ne!')
    }, 1200)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('don4e!')
    }, 800)
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!5')
    }, 600)
})

Promise.all([promise1, promise2, promise3, promise4, promise5])
  .then(results => {
    console.log(results); 
  });

// Promise.race

const racePromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('do1ne!')
    }, 1000)
})

const racePromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('do3ne!')
    }, 500)
})

const racePromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('do2ne!')
    }, 1200)
})

const racePromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('don4e!')
    }, 800)
})

const racePromise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!5')
    }, 600)
})

Promise.race([promise1, promise2, promise3, promise4, promise5])
  .then(results => {
    console.log(results); 
  });