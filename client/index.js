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
  let itemExists = false;
  let newRow;

  // Check if the item already exists in the table
  for (let row of table.rows) {
    if (row.cells[0].textContent === name) {
      // Item exists, update the quantity
      let quantityCell = row.cells[1];
      quantityCell.textContent = parseInt(quantityCell.textContent) + 1;
      itemExists = true;
      break;
    }
  }

  // If the item does not exist, add it to the table
  if (!itemExists) {
    newRow = table.insertRow();
    const nameCell = newRow.insertCell(0);
    const quantityCell = newRow.insertCell(1);
    nameCell.textContent = name;
    quantityCell.textContent = '1';

    // Add the Remove button
    const removeCell = newRow.insertCell(2);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() { removeFoodItem(this); });
    removeCell.appendChild(removeButton);

    // Add the Info button
    const infoCell = newRow.insertCell(3);
    const infoButton = document.createElement('button');
    infoButton.textContent = 'Info';
    infoButton.addEventListener('click', function() { fetchFoodInfo(name); });
    infoCell.appendChild(infoButton);
  }

  // Remove the pop-up list container after adding the item
  const listContainer = document.getElementById('food-list-container');
  if (listContainer) {
    listContainer.remove();
  }
  checkRecipesAgainstInventory();
}


function fetchFoodInfo(foodName) {
  // Encode the foodName to ensure special characters are handled correctly in the URL
  const encodedFoodName = encodeURIComponent(foodName);

  // Make a GET request to the server to fetch details for the specified food item
  fetch(`/api/foodInfo?name=${encodedFoodName}`)
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then(info => {
      // Call a function to display this information on the page
      displayFoodInfo(info);
    })
    .catch(error => {
      console.error('Error fetching food info:', error);
      // Handle any errors here, such as displaying an error message to the user
    });
}











function displayFoodInfo(info) {
  // Select the HTML element where you want to display the food info
  // You should add this element to your HTML if it doesn't exist
  const infoContainer = document.getElementById('food-info-container');
  infoContainer.innerHTML = ''; // Clear existing info

  // Create HTML content with the food details
  const infoContent = Object.keys(info).map(key => {
    return `<div><strong>${key}:</strong> ${info[key]}</div>`;
  }).join('');

  // Set the new HTML content
  infoContainer.innerHTML = infoContent;

  // Display the container if it was previously hidden
  infoContainer.style.display = 'block';
  document.getElementById('hide-info').style.display = 'block';
}

// Function to hide food info
function hideFoodInfo() {
  document.getElementById('food-info-container').style.display = 'none';
  document.getElementById('hide-info').style.display = 'none';
}

// Add event listener to the Hide Info button
document.getElementById('hide-info').addEventListener('click', hideFoodInfo);

// Function to remove a food item or decrease its quantity
function removeFoodItem(button) {
  const row = button.parentNode.parentNode;
  const quantityCell = row.cells[1];
  let quantity = parseInt(quantityCell.textContent);
  
  if (quantity === 1) {
      // If quantity is 1, remove the row
      row.remove();
  } else {
      // If quantity is more than 1, decrease it by 1
      quantityCell.textContent = quantity - 1;
  }
  checkRecipesAgainstInventory();
}






function checkRecipesAgainstInventory() {
  const table = document.getElementById('food-table').getElementsByTagName('tbody')[0];
  let ingredients = [];

  for (let row of table.rows) {
      ingredients.push({
          name: row.cells[0].textContent,
          quantity: parseInt(row.cells[1].textContent)
      });
  }

  fetch('/api/checkRecipes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients: ingredients })
  })
  .then(response => response.json())
  .then(data => {
      console.log('Recipes check:', data);
      // Here you would update the UI with the information received
      // For example, indicating which recipes can be made
  })
  .catch(error => console.error('Error checking recipes:', error));
}





