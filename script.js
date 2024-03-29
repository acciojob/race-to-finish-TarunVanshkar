window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

const random = Math.floor(Math.random() * 5) + 1;     // +1 to start it with 1, not with 0    ==> generating random is necessary
console.log(random)

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise1")
    }, random * 1000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise2")
    }, random * 1000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise3")
    }, random * 1000);
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise4")
    }, random * 1000);
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise5")
    }, random * 1000);
})

promises.push(promise1)
promises.push(promise2)
promises.push(promise3)
promises.push(promise4)
promises.push(promise5)

const finalPromise = Promise.any(promises);

const div = document.getElementById("output");

finalPromise.then((result) => {
    div.innerText = result
})