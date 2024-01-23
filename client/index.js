const { response } = require("express")

document.getElementById('add-food').addEventListener('click', () => {
    fetch('/api/foodNames')
        .then(response => response.json)
        .then(foodNames => {
            const listContainer = document.createElement('div');
            listContainer.id = 'food-list-container';
            listContainer.innerHTML = '<ul>' + foodNames.map(name => `<li onclick="addFoodToTable('${name}')">${name}</li>`).join('') + '</ul>';
            document.body.appendChild(listContainer);
        })
        .catch(error => console.error('Error:', error));

})

function addFoodToTable(name) {
    const table = document.getElementById('food-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const newCell = newRow.insertCell(0);
    newCell.textContent = name;
    document.getElementById('food-list-container').remove();
}