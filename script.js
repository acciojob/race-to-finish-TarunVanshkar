window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1")
    }, 1000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2")
    }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise3")
    }, 3000);
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise4")
    }, 4000);
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise5")
    }, 5000);
})

const promises = [promise1, promise2, promise3, promise4, promise5];

const finalPromise = Promise.any(promises);

const div = document.getElementById("output");
div.innerText = finalPromise;