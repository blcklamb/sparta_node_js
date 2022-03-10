//JS 기본 문법 복습-01
/*
//변수 선언
var age = 20;
//console.log(age);

var name = "John Doe";
//console.log(name);
//배열
var personArray = [10, 20, 30]
//console.log(personArray[0]);
//객체
var personDict = {"name": "John Doe", "age":"20"};
//console.log(personDict['age']);

//조건문
if (personDict['age']>19){
    console.log('Here is your beer!')
} else {
    console.log('Get out!!')
}
*/

//1-5 JS 기본 문법 복습-02
//반복문
var personArray2 = [
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
];

function isValidAge(person) {
    if (person["age"] > 19) {
        return true
    } else {
        return false
    }
}

for(var i = 0; i < personArray2.length; i++) {
    console.log(personArray2[i])
    if (isValidAge(personArray2[i])) {
        console.log('Here is your Beer!');
    } else {
        console.log('Get out!');
    }
}

//함수
