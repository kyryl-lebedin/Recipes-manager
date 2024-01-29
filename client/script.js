// function that manages adding food to db
function addNewData(data) {
  fetch('http://localhost:3000/api/addData', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  // server response message
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}



// event listener for submitting newly created food in modal to db 

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('foodForm').addEventListener('submit', function (event) {
        event.preventDefault();
        foodForm.classList.remove('was-validated');

        
        foodModal.addEventListener('show.bs.modal', function () {
            foodForm.reset();
            foodForm.classList.remove('was-validated');
        });

        if (!foodForm.checkValidity()) {
            // input check
            
            event.stopPropagation();
        } else {
            
            let obj = {};
            
            
            
            var foodNameInputValue = document.getElementById('foodName').value;
            var foodNameLabel = document.querySelector('label[for="foodName"]').textContent;
            obj[foodNameLabel] = foodNameInputValue;

            var caloriesKcalInputValue = document.getElementById('caloriesKcal').value;
            var caloriesKcalLabel = document.querySelector('label[for="caloriesKcal"]').textContent;
            obj[caloriesKcalLabel] = parseFloat(caloriesKcalInputValue);

            var carbohydratesGInputValue = document.getElementById('carbohydratesG').value;
            var carbohydratesGLabel = document.querySelector('label[for="carbohydratesG"]').textContent;
            obj[carbohydratesGLabel] = parseFloat(carbohydratesGInputValue);

            var fatsGInputValue = document.getElementById('fatsG').value;
            var fatsGLabel = document.querySelector('label[for="fatsG"]').textContent;
            obj[fatsGLabel] = parseFloat(fatsGInputValue);

            var proteinGInputValue = document.getElementById('proteinG').value;
            var proteinGLabel = document.querySelector('label[for="proteinG"]').textContent;
            obj[proteinGLabel] = parseFloat(proteinGInputValue);

            var fiberInputValue = document.getElementById('fiber').value;
            var fiberLabel = document.querySelector('label[for="fiber"]').textContent;
            obj[fiberLabel] = parseFloat(fiberInputValue);

            var netCarbsGInputValue = document.getElementById('netCarbsG').value;
            var netCarbsGLabel = document.querySelector('label[for="netCarbsG"]').textContent;
            obj[netCarbsGLabel] = parseFloat(netCarbsGInputValue);

            var saturatedGInputValue = document.getElementById('saturatedG').value;
            var saturatedGLabel = document.querySelector('label[for="saturatedG"]').textContent;
            obj[saturatedGLabel] = parseFloat(saturatedGInputValue);

            var mufaGInputValue = document.getElementById('mufaG').value;
            var mufaGLabel = document.querySelector('label[for="mufaG"]').textContent;
            obj[mufaGLabel] = parseFloat(mufaGInputValue);

            var pufaGInputValue = document.getElementById('pufaG').value;
            var pufaGLabel = document.querySelector('label[for="pufaG"]').textContent;
            obj[pufaGLabel] = parseFloat(pufaGInputValue);

            var pufaOmega6GInputValue = document.getElementById('pufaOmega6G').value;
            var pufaOmega6GLabel = document.querySelector('label[for="pufaOmega6G"]').textContent;
            obj[pufaOmega6GLabel] = parseFloat(pufaOmega6GInputValue);

            var pufaOmega3GInputValue = document.getElementById('pufaOmega3G').value;
            var pufaOmega3GLabel = document.querySelector('label[for="pufaOmega3G"]').textContent;
            obj[pufaOmega3GLabel] = parseFloat(pufaOmega3GInputValue);

            var vitARAEInputValue = document.getElementById('vit-a-rae').value;
            var vitARAELabel = document.querySelector('label[for="vit-a-rae"]').textContent;
            obj[vitARAELabel] = parseFloat(vitARAEInputValue);

            var vitAIUInputValue = document.getElementById('vit-a-iu').value;
            var vitAIULabel = document.querySelector('label[for="vit-a-iu"]').textContent;
            obj[vitAIULabel] = parseFloat(vitAIUInputValue);

            var vitB1InputValue = document.getElementById('vit-b1').value;
            var vitB1Label = document.querySelector('label[for="vit-b1"]').textContent;
            obj[vitB1Label] = parseFloat(vitB1InputValue);

            var vitB2InputValue = document.getElementById('vit-b2').value;
            var vitB2Label = document.querySelector('label[for="vit-b2"]').textContent;
            obj[vitB2Label] = parseFloat(vitB2InputValue);

            var vitB3InputValue = document.getElementById('vit-b3').value;
            var vitB3Label = document.querySelector('label[for="vit-b3"]').textContent;
            obj[vitB3Label] = parseFloat(vitB3InputValue);

            var vitB5InputValue = document.getElementById('vit-b5').value;
            var vitB5Label = document.querySelector('label[for="vit-b5"]').textContent;
            obj[vitB5Label] = parseFloat(vitB5InputValue);

            var vitB6InputValue = document.getElementById('vit-b6').value;
            var vitB6Label = document.querySelector('label[for="vit-b6"]').textContent;
            obj[vitB6Label] = parseFloat(vitB6InputValue);

            var vitB9InputValue = document.getElementById('vit-b9').value;
            var vitB9Label = document.querySelector('label[for="vit-b9"]').textContent;
            obj[vitB9Label] = parseFloat(vitB9InputValue);

            var vitB12InputValue = document.getElementById('vit-b12').value;
            var vitB12Label = document.querySelector('label[for="vit-b12"]').textContent;
            obj[vitB12Label] = parseFloat(vitB12InputValue);

            var vitCInputValue = document.getElementById('vit-c').value;
            var vitCLabel = document.querySelector('label[for="vit-c"]').textContent;
            obj[vitCLabel] = parseFloat(vitCInputValue);

            var vitDInputValue = document.getElementById('vit-d').value;
            var vitDLabel = document.querySelector('label[for="vit-d"]').textContent;
            obj[vitDLabel] = parseFloat(vitDInputValue);

            var vitEInputValue = document.getElementById('vit-e').value;
            var vitELabel = document.querySelector('label[for="vit-e"]').textContent;
            obj[vitELabel] = parseFloat(vitEInputValue);

            var vitKInputValue = document.getElementById('vit-k').value;
            var vitKLabel = document.querySelector('label[for="vit-k"]').textContent;
            obj[vitKLabel] = parseFloat(vitKInputValue);

            var cholineInputValue = document.getElementById('choline').value;
            var cholineLabel = document.querySelector('label[for="choline"]').textContent;
            obj[cholineLabel] = parseFloat(cholineInputValue);

            var betaineInputValue = document.getElementById('betaine').value;
            var betaineLabel = document.querySelector('label[for="betaine"]').textContent;
            obj[betaineLabel] = parseFloat(betaineInputValue);

            var calciumInputValue = document.getElementById('calcium').value;
            var calciumLabel = document.querySelector('label[for="calcium"]').textContent;
            obj[calciumLabel] = parseFloat(calciumInputValue);

            var copperInputValue = document.getElementById('copper').value;
            var copperLabel = document.querySelector('label[for="copper"]').textContent;
            obj[copperLabel] = parseFloat(copperInputValue);

            var fluorideInputValue = document.getElementById('fluoride').value;
            var fluorideLabel = document.querySelector('label[for="fluoride"]').textContent;
            obj[fluorideLabel] = parseFloat(fluorideInputValue);

            var ironInputValue = document.getElementById('iron').value;
            var ironLabel = document.querySelector('label[for="iron"]').textContent;
            obj[ironLabel] = parseFloat(ironInputValue);

            var magnesiumInputValue = document.getElementById('magnesium').value;
            var magnesiumLabel = document.querySelector('label[for="magnesium"]').textContent;
            obj[magnesiumLabel] = parseFloat(magnesiumInputValue);

            var manganeseInputValue = document.getElementById('manganese').value;
            var manganeseLabel = document.querySelector('label[for="manganese"]').textContent;
            obj[manganeseLabel] = parseFloat(manganeseInputValue);

            var phosphorusInputValue = document.getElementById('phosphorus').value;
            var phosphorusLabel = document.querySelector('label[for="phosphorus"]').textContent;
            obj[phosphorusLabel] = parseFloat(phosphorusInputValue);

            var potassiumInputValue = document.getElementById('potassium').value;
            var potassiumLabel = document.querySelector('label[for="potassium"]').textContent;
            obj[potassiumLabel] = parseFloat(potassiumInputValue);

            var seleniumInputValue = document.getElementById('selenium').value;
            var seleniumLabel = document.querySelector('label[for="selenium"]').textContent;
            obj[seleniumLabel] = parseFloat(seleniumInputValue);

            var sodiumInputValue = document.getElementById('sodium').value;
            var sodiumLabel = document.querySelector('label[for="sodium"]').textContent;
            obj[sodiumLabel] = parseFloat(sodiumInputValue);

            var zincInputValue = document.getElementById('zinc').value;
            var zincLabel = document.querySelector('label[for="zinc"]').textContent;
            obj[zincLabel] = parseFloat(zincInputValue);


        
            addNewData(obj);
            foodForm.reset();
            bootstrap.Modal.getInstance(document.getElementById('foodModal')).hide();
        }
        foodForm.classList.add('was-validated');
    }, false);
});





//function that manages adding particular food entity to the table (with quantity check) bookmark 1

//foodName is a string
function addFood(foodName) {
    let rows = document.querySelectorAll('.food-table tbody tr');
    
    // Check if the food is already in the table
    for (let row of rows) {
        if (row.cells[1].textContent === foodName) {
            let quantity = parseInt(row.cells[0].textContent);
            row.cells[0].textContent = quantity + 1;
            return;
        }
    }

    //append elements to table
    let tableBody = document.querySelector(".food-table tbody");
    let newRow = document.createElement("tr");

    let firstColumn = document.createElement("td");
    firstColumn.textContent = "1";
    newRow.appendChild(firstColumn);

    let secondColumn = document.createElement("td");
    secondColumn.textContent = foodName;
    newRow.appendChild(secondColumn);

    let thirdColumn = document.createElement("td");
    let button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-outline-success delete-food";
    button.innerHTML = '&times;';  
    
    thirdColumn.appendChild(button);
    newRow.appendChild(thirdColumn);

    tableBody.appendChild(newRow);
}





// event listener that realizes deletion from food table with button 
document.addEventListener('DOMContentLoaded', () => {
    
    let tableBody = document.querySelector('.food-table tbody');

    tableBody.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('delete-food')) {
            let button = event.target;
            let row = button.closest('tr');
            let quantity = parseInt(row.cells[0].textContent);

            if (quantity > 1) {
                row.cells[0].textContent = quantity - 1;
            } else {
                row.remove();
            }
            updateRecipes();
        }
    });

   
});




// function for retrieving food names from database

function getFoodNames() {
    return fetch('/getFoodNames') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => console.error('Error fetching food names:', error));
}




// function that adds checkboxes with food when add food button pressed

// input is string
function addFoodCheckbox(foodName) {
    const container = document.createElement('div');
    container.className = 'form-check d-flex align-items-center';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-2';
    checkbox.id = 'check_' + foodName;
    checkbox.name = 'food';
    checkbox.value = foodName;

    const labelCheckbox = document.createElement('label');
    labelCheckbox.className = 'form-check-label me-auto';
    labelCheckbox.htmlFor = 'check_' + foodName;
    labelCheckbox.textContent = foodName;

    const numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.className = 'form-control';
    numberInput.id = 'num_' + foodName;
    numberInput.name = 'quantity';
    numberInput.value = '1';
    numberInput.min = '1';
  

    container.appendChild(checkbox);
    container.appendChild(labelCheckbox);
    container.appendChild(numberInput);

    
    document.getElementById('foodListForm').appendChild(container);
    
};



// event listener that create checkbox form when pressed add food
// need to be combined with one below cause the functionality looks same

document.getElementById('add-food').addEventListener('click', () => {
    getFoodNames().then(namesList => { 
        if (namesList) { 
            namesList.forEach(foodName => {
                addFoodCheckbox(foodName);
            });
        }
    });
});

document.getElementById('add-food').addEventListener('click', () => {
    getFoodNames().then(namesList => {
        if (namesList) {
            const form = document.getElementById('foodListForm');
            form.innerHTML = '';
            namesList.forEach(foodName => {
                addFoodCheckbox(foodName);
            });
        }
    });
});

//event listener for hiding add food modal when submitted
document.getElementById('foodListModal').addEventListener('hide.bs.modal', function () {
    document.getElementById('foodListForm').reset();
});



//function for adding desired, checked in modal food to the table
document.getElementById('foodListForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    document.querySelectorAll('#foodListForm input[name="food"]:checked').forEach(checkbox => {
        const foodName = checkbox.value;
        const quantity = parseInt(document.getElementById('num_' + foodName).value, 10);
        if (!isNaN(quantity)) {
            for (let i = quantity; i > 0; i--) {
                addFood(foodName);
            }
            updateRecipes();   //udating recipes each time new food is added
        }
    });

    
    bootstrap.Modal.getInstance(document.getElementById('foodListModal')).hide();
});




// function that fetches recipes that are applicable to table and adds them to table
function updateRecipes() {
    //1. Collect food table data 
    var table = document.querySelector('.food-table tbody');
    var data = {};
    
    table.querySelectorAll('tr').forEach(function(row) {
        var cells = row.querySelectorAll('td');
        let food = cells[1].innerText;
        let number = parseInt(cells[0].innerText, 10);
        data[food] = number;
    });

    //2. Get available recipes asynchronously and update the table
    getAvailableRecipes(data).then(recipes => {
        if (recipes) {
            addRecipesToTable(recipes);
        } else {
            console.error('No recipes received');
        }
    }).catch(error => {
        console.error('Error in getting recipes:', error);
    });
}


// function for sending table data and recieving the array with available recipes

// input is object output is array
function getAvailableRecipes(tableData) {
    return fetch('/api/getAvailableRecipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tableData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(recipes => {

        console.log(recipes);

        //turn into array
        return recipes;
    })
    .catch(error => {
        console.error('There has been a problem with fetch operation:', error);
    });
}



function addRecipesToTable(recipes) {
    
    var tableBody = document.getElementById('table-body');

    
    tableBody.innerHTML = '';

    
    recipes.forEach(function(recipe) {
        
        var row = document.createElement('tr');
        var cell = document.createElement('td');

        
        cell.textContent = recipe;

        
        row.appendChild(cell);

        
        tableBody.appendChild(row);
    });
}





// event listener that pops up information about food when it is clicked in the table
document.addEventListener('DOMContentLoaded', () => {
    let tableBody = document.querySelector('.food-table tbody');

    tableBody.addEventListener('click', function(event) {
        
        if (event.target.closest('.delete-food')) {  
            event.stopPropagation();
            return;
        }

        
        let row = event.target.closest('tr');
        if (row) {
            let foodName = row.cells[1].textContent; 
            showFoodInfo(foodName).then(foodInfo => {
                const modalBody = document.getElementById('modalBody');
                modalBody.innerHTML = ''; // Clear previous content
        
                Object.keys(foodInfo).forEach(key => {
                    const p = document.createElement('p');
                    p.textContent = `${key}: ${foodInfo[key]}`;
                    modalBody.appendChild(p);
                });

               
                const myModal = new bootstrap.Modal(document.getElementById('foodInfoModal'));
                myModal.show();
            }).catch(error => {
                console.error('Error fetching food info:', error);
               
            });
        }
    });
});


// function for retrieving food info by sending name

function showFoodInfo(foodName) {
    return fetch('/get-food-details', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ foodName: foodName })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        console.log(data);
        return data;
    })
    .catch(error => {
        console.error('There has been a problem with fetch operation:', error);
    });
}




// function for adding new recipe to db 

// input is object
function addNewRecipe(data) {
    
    fetch('http://localhost:3000/api/addRecipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    // server response message
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }
  
  


  // event listener that handles creating new recipie wit modal and forms
  document.addEventListener("DOMContentLoaded", function(){
    var recipeForm = document.getElementById('recipeForm');
    var foodRecipeListForm = document.getElementById('foodRecipeListForm');
    var addRecipeModal = document.getElementById('addRecipeModal');

    addRecipeModal.addEventListener('show.bs.modal', function () {
        recipeForm.reset();
        foodRecipeListForm.reset();
        recipeForm.classList.remove('was-validated');
    });

    recipeForm.addEventListener('submit', function (event) {
        if (!recipeForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Prevent form submission

            let obj = {};
            var recipeNameInputValue = document.getElementById('recipeName').value;
            var recipeNameLabel = document.querySelector('label[for="recipeName"]').textContent;
            obj[recipeNameLabel] = recipeNameInputValue;

            var durationInputValue = document.getElementById('duration').value;
            var durationLabel = document.querySelector('label[for="duration"]').textContent;
            obj[durationLabel] = durationInputValue;

            var recipeDescriptionValue = document.getElementById('recipeDescription').value;
            var recipeDescriptionLabel = document.querySelector('label[for="recipeDescription"]').textContent;
            obj[recipeDescriptionLabel] = recipeDescriptionValue;

            // Get checked items from the checkboxes
            obj["Ingredients"] = getCheckedItems();

            addNewRecipe(obj);
            bootstrap.Modal.getInstance(addRecipeModal).hide();
        }
        recipeForm.classList.add('was-validated'); // This should be outside of the else block
    }, false);
});


// function that gathers checked items from recipeCreate form in modal
function getCheckedItems() {
    let checkedItems = [];
    const allCheckboxes = document.querySelectorAll('#foodRecipeListForm input[type="checkbox"]');

    allCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const foodName = checkbox.value;
            const quantity = document.getElementById('num_' + foodName).value;
            checkedItems.push({ name: foodName, quantity: quantity });
        }
    });

    return checkedItems;
}


  // function that adds checkboxes into create recipe modal form 
  function addFoodRecipeCheckbox(foodName) {
    const container = document.createElement('div');
    container.className = 'form-check d-flex align-items-center';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-2';
    checkbox.id = 'check_' + foodName;
    checkbox.name = 'food';
    checkbox.value = foodName;

    const labelCheckbox = document.createElement('label');
    labelCheckbox.className = 'form-check-label me-auto';
    labelCheckbox.htmlFor = 'check_' + foodName;
    labelCheckbox.textContent = foodName;

    const numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.className = 'form-control';
    numberInput.id = 'num_' + foodName;
    numberInput.name = 'quantity';
    numberInput.value = '1';
    numberInput.min = '1';
  

    container.appendChild(checkbox);
    container.appendChild(labelCheckbox);
    container.appendChild(numberInput);

    
    document.getElementById('foodRecipeListForm').appendChild(container);
    
};


// event listeners for udating create recipe forms and modal, might need to be combined
document.getElementById('create-recipe').addEventListener('click', () => {
    getFoodNames().then(namesList => { 
        if (namesList) { 
            namesList.forEach(foodName => {
                addFoodRecipeCheckbox(foodName);
            });
        }
    });
});


document.getElementById('create-recipe').addEventListener('click', () => {
    getFoodNames().then(namesList => {
        if (namesList) {
            const form = document.getElementById('foodRecipeListForm');
            form.innerHTML = '';
            namesList.forEach(foodName => {
                console.log(foodName);
                addFoodRecipeCheckbox(foodName);
            });
        }
    });
});


document.getElementById('foodRecipeListModal').addEventListener('hide.bs.modal', function () {
    document.getElementById('foodRecipeListForm').reset();
});




// event listeners that handles number of items checked in the form (i can't remember how)
document.getElementById('foodListForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    document.querySelectorAll('#foodListForm input[name="food"]:checked').forEach(checkbox => {
        const foodName = checkbox.value;
        const quantity = parseInt(document.getElementById('num_' + foodName).value, 10);
        if (!isNaN(quantity)) {
            for (let i = quantity; i > 0; i--) {
                addFood(foodName);
            }
        }
    });

    
    bootstrap.Modal.getInstance(document.getElementById('foodListModal')).hide();
});






