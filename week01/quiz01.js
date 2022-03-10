function getAgeAverage(personArray) {
    var average = 0;
    var total = 0;

    for (var i = 0; i < personArray.length; i++) {
        total += personArray[i]["age"]
        
    }
    average= total/personArray.length;
    return average;
}

var personArray = [
    { "name": "John Doe", "age": 20 },
    { "name": "Jane Doe", "age": 19 },
    { "name": "Fred Doe", "age": 32 },
    { "name": "Chris Doe", "age": 45 },
    { "name": "Layla Doe", "age": 37 },
];

console.log(getAgeAverage(personArray)); // 30.6