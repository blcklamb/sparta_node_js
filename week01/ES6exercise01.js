/*1-8
const students = ["John", "Jane", "Alex"]

//for of
// for (let student of students) {
//     console.log(student)
// }

//for in_index를 하나씩 꺼내줌
// for (let index in students) {
//     console.log(students[index])
// }

//forEach 길이 상관없이 알아서 실행해줌
students.forEach((student) => {
    console.log(student)
})

*/

/*1-9*/
//arrow function

function hello() {
    console.log("Hello function");
}

// 첫번째 arrow function
const arrowFunction = () => {
    console.log("Hello arrow function");
}

// 두번째 arrow function
//함수가 한 줄만 실행할 때 굳이 {}를 쓸 필요는 없다
const arrowFunctionWithoutReturn = () => console.log("Hello arrow function without return");

hello(); // Hello function
arrowFunction(); // Hello arrow function
arrowFunctionWithoutReturn(); // Hello arrow function without return


