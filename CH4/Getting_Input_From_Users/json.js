import fs from 'fs';

const person = {
    "name": "Andrew",
    "planet": "Earth",
    "age": 27
};

// Convert Object to JSON FILE
// const personJson = JSON.stringify(person);
// fs.writeFileSync('1-json.json', personJson);

// Convert JSON FILE to Object 
const personBuffer = fs.readFileSync('1-json.json');
const personJson = personBuffer.toString();
const personData = JSON.parse(personJson);
personData.name =  "Tamer Ma3rouf";
personData.age =  41;
// Convert Object to JSON FILE
const newPerson = JSON.stringify(personData);
fs.writeFileSync('1-json.json', newPerson);