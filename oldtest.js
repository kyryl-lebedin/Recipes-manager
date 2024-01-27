const fs = require('fs');
const path = require('path');

// utility function: reading json and returning object corresponding to it
function readData() {
    const jsonData = fs.readFileSync('serverdb.json', 'utf-8');
    return JSON.parse(jsonData);
}



const getAllFoods = () => readData();



function addNewFood(foodData) {
    const data = readData();
    data.push(foodData);
    fs.writeFileSync(path.join(__dirname, 'serverdb.json'), JSON.stringify(data, null, 2), 'utf8');
}

function getFoodNames() {
    const data = readData();
    return data.map(item => item['Food (100g)']);
}




module.exports = { getAllFoods, getFoodNames, addNewFood };