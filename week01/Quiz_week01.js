/*
//01 객체 내용 출력하기
var personArray = [
    {"name": "John Doe", "age":20},
    {"name": "Jane Doe", "age":19}
];
for (let n in personArray) {
    console.log("His her name is", personArray[n]["name"],". He/She is", personArray[n]["age"], "years old")
}
//His/her name is John Doe. He/She is 20 years old
//His/her name is Jane Doe. He/She is 19 years old
*/

/*
//02 홀수/짝수 구분 함수 만들어보기
function isEven(n) {
    if (n%2==0) {
        return true
    } else {
        return false
    }
}
function isOdd(n) {
    if (n%2==1) {
        return true
    } else {
        return false
    }
}

console.log(isEven(10)); //true
console.log(isEven(3)); //false
console.log(isOdd(5)); //true
console.log(isOdd(8)); //false

*/

/*

//03 John Doe만 마실 수 있는 맥주
function checkName(person) {
    if (person["name"] == "John Doe") {
        return true
    } else {
        return false
    }
}
var personArray = [
    {"name": "Mark Bae", "age": 30},
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
];

for (var person of personArray) {
    if (checkName(person)) {
        console.log("Here is your beer!", person["name"]);
    }else{
        console.log("Get out!", person["name"]);
    }
}

*/


//04 미성년자만 찾아보기
function getChildrens(personArray) {
    //20세이하의 사람들만 배열로 반환해봅시다
    var children = [];
    for (n in personArray) {
        if (personArray[n]["age"] < 20) {
            children.push(personArray[n]);
        }
    }
    return children
}
var personArray= [
    {"name": "John Doe", "age": 10},
    {"name": "Jane Doe", "age": 29},
    {"name": "Fred Doe", "age": 13},
    {"name": "Chris Doe", "age": 22},
    {"name": "Layla Doe", "age": 8}
];
console.log(getChildrens(personArray));
// [
//    {"name": "John Doe", "age": 10},
//    {"name": "Fred Doe", "age": 13},
//    {"name": "Layla Doe", "age": 8},
//]
