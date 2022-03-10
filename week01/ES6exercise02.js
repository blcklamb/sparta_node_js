/*
//finally가 있는 경우
const isReady = true;
// 1. Producer
const promise = new Promise((resolve, reject) => {
  console.log("Promise is created!");
  if (isReady) {
    resolve("It's ready");
  } else {
    reject("Not ready");
  }
});

// 2. Consumer
promise
  .then(messsage => {
    console.log(messsage);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done");
  });

// Promise is created!
// It's ready
// Done

*/

/* finally가 없는 경우
const isReady = true;
// 1. Producer
const promise = new Promise((resolve, reject) => {
    console.log("Promise is created!");
    if (isReady) {
        resolve("It's ready");
    } else {
        reject("Not ready");
    }
});

// 2. Consumer
promise
    // promise에서 resolve가 될경우
    .then(messsage => {
        console.log(messsage);
    })
    // promise에서 reject가 될경우
    .catch(error => {
        console.error(error);
    })

// Promise is created!
// It's ready
*/

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    console.log('before await!')

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

    console.log('after await!')

    console.log(result); // "완료!"
}

f();