document.getElementById('add-food').addEventListener('click', () => {
    fetch('/api/foodNames')
        .then(response => response.json())
        .then(foodNames => {


            // Create a new list container
            const listContainer = document.createElement('div');
            listContainer.id = 'food-list-container';
            listContainer.innerHTML = '<ul>' +
                foodNames.map(name => `<li onclick="addFoodToTable('${name}')">${name}</li>`).join('') +
                '</ul>';

            // Insert the list container at the end of the div that contains the food table and buttons
            const foodSection = document.getElementById('food-table').parentNode;
            foodSection.appendChild(listContainer);
        })
        .catch(error => console.error('Error:', error));
});


function addFoodToTable(name) {
    const table = document.getElementById('food-table').getElementsByTagName('tbody')[0];
    let rowExists = false;
  
    // Check if the row already exists
    for (let row of table.rows) {
      if (row.cells[0].textContent === name) {
        // If it exists, increase the quantity by one
        rowExists = true;
        let quantityCell = row.cells[1];
        quantityCell.textContent = parseInt(quantityCell.textContent) + 1;
        break;
      }
    }
  
    // If the row does not exist, add a new row with quantity 1
    if (!rowExists) {
      const newRow = table.insertRow();
      const nameCell = newRow.insertCell(0);
      const quantityCell = newRow.insertCell(1);
      nameCell.textContent = name;
      quantityCell.textContent = '1';
    }
  
    document.getElementById('food-list-container').remove();
  }
  