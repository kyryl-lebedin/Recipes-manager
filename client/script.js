// function that manages adding food to db10.
function addNewData (data) {
  fetch('/api/addData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

// event listener for submitting newly created food in modal to db

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('foodForm').addEventListener('submit', function (event) {
    event.preventDefault()
    // eslint-disable-next-line
    foodForm.classList.remove('was-validated')
    // eslint-disable-next-line
    foodModal.addEventListener('show.bs.modal', function () {
      // eslint-disable-next-line
      foodForm.reset()
      // eslint-disable-next-line
      foodForm.classList.remove('was-validated')
    })
    // eslint-disable-next-line
    if (!foodForm.checkValidity()) {
      // input check

      event.stopPropagation()
    } else {
      const obj = {}

      const foodNameInputValue = document.getElementById('foodName').value
      const foodNameLabel = document.querySelector('label[for="foodName"]').textContent
      obj[foodNameLabel] = foodNameInputValue

      const caloriesKcalInputValue = document.getElementById('caloriesKcal').value
      const caloriesKcalLabel = document.querySelector('label[for="caloriesKcal"]').textContent
      obj[caloriesKcalLabel] = parseFloat(caloriesKcalInputValue)

      const carbohydratesGInputValue = document.getElementById('carbohydratesG').value
      const carbohydratesGLabel = document.querySelector('label[for="carbohydratesG"]').textContent
      obj[carbohydratesGLabel] = parseFloat(carbohydratesGInputValue)

      const fatsGInputValue = document.getElementById('fatsG').value
      const fatsGLabel = document.querySelector('label[for="fatsG"]').textContent
      obj[fatsGLabel] = parseFloat(fatsGInputValue)

      const proteinGInputValue = document.getElementById('proteinG').value
      const proteinGLabel = document.querySelector('label[for="proteinG"]').textContent
      obj[proteinGLabel] = parseFloat(proteinGInputValue)

      const fiberInputValue = document.getElementById('fiber').value
      const fiberLabel = document.querySelector('label[for="fiber"]').textContent
      obj[fiberLabel] = parseFloat(fiberInputValue)

      const netCarbsGInputValue = document.getElementById('netCarbsG').value
      const netCarbsGLabel = document.querySelector('label[for="netCarbsG"]').textContent
      obj[netCarbsGLabel] = parseFloat(netCarbsGInputValue)

      const saturatedGInputValue = document.getElementById('saturatedG').value
      const saturatedGLabel = document.querySelector('label[for="saturatedG"]').textContent
      obj[saturatedGLabel] = parseFloat(saturatedGInputValue)

      const mufaGInputValue = document.getElementById('mufaG').value
      const mufaGLabel = document.querySelector('label[for="mufaG"]').textContent
      obj[mufaGLabel] = parseFloat(mufaGInputValue)

      const pufaGInputValue = document.getElementById('pufaG').value
      const pufaGLabel = document.querySelector('label[for="pufaG"]').textContent
      obj[pufaGLabel] = parseFloat(pufaGInputValue)

      const pufaOmega6GInputValue = document.getElementById('pufaOmega6G').value
      const pufaOmega6GLabel = document.querySelector('label[for="pufaOmega6G"]').textContent
      obj[pufaOmega6GLabel] = parseFloat(pufaOmega6GInputValue)

      const pufaOmega3GInputValue = document.getElementById('pufaOmega3G').value
      const pufaOmega3GLabel = document.querySelector('label[for="pufaOmega3G"]').textContent
      obj[pufaOmega3GLabel] = parseFloat(pufaOmega3GInputValue)

      const vitARAEInputValue = document.getElementById('vit-a-rae').value
      const vitARAELabel = document.querySelector('label[for="vit-a-rae"]').textContent
      obj[vitARAELabel] = parseFloat(vitARAEInputValue)

      const vitAIUInputValue = document.getElementById('vit-a-iu').value
      const vitAIULabel = document.querySelector('label[for="vit-a-iu"]').textContent
      obj[vitAIULabel] = parseFloat(vitAIUInputValue)

      const vitB1InputValue = document.getElementById('vit-b1').value
      const vitB1Label = document.querySelector('label[for="vit-b1"]').textContent
      obj[vitB1Label] = parseFloat(vitB1InputValue)

      const vitB2InputValue = document.getElementById('vit-b2').value
      const vitB2Label = document.querySelector('label[for="vit-b2"]').textContent
      obj[vitB2Label] = parseFloat(vitB2InputValue)

      const vitB3InputValue = document.getElementById('vit-b3').value
      const vitB3Label = document.querySelector('label[for="vit-b3"]').textContent
      obj[vitB3Label] = parseFloat(vitB3InputValue)

      const vitB5InputValue = document.getElementById('vit-b5').value
      const vitB5Label = document.querySelector('label[for="vit-b5"]').textContent
      obj[vitB5Label] = parseFloat(vitB5InputValue)

      const vitB6InputValue = document.getElementById('vit-b6').value
      const vitB6Label = document.querySelector('label[for="vit-b6"]').textContent
      obj[vitB6Label] = parseFloat(vitB6InputValue)

      const vitB9InputValue = document.getElementById('vit-b9').value
      const vitB9Label = document.querySelector('label[for="vit-b9"]').textContent
      obj[vitB9Label] = parseFloat(vitB9InputValue)

      const vitB12InputValue = document.getElementById('vit-b12').value
      const vitB12Label = document.querySelector('label[for="vit-b12"]').textContent
      obj[vitB12Label] = parseFloat(vitB12InputValue)

      const vitCInputValue = document.getElementById('vit-c').value
      const vitCLabel = document.querySelector('label[for="vit-c"]').textContent
      obj[vitCLabel] = parseFloat(vitCInputValue)

      const vitDInputValue = document.getElementById('vit-d').value
      const vitDLabel = document.querySelector('label[for="vit-d"]').textContent
      obj[vitDLabel] = parseFloat(vitDInputValue)

      const vitEInputValue = document.getElementById('vit-e').value
      const vitELabel = document.querySelector('label[for="vit-e"]').textContent
      obj[vitELabel] = parseFloat(vitEInputValue)

      const vitKInputValue = document.getElementById('vit-k').value
      const vitKLabel = document.querySelector('label[for="vit-k"]').textContent
      obj[vitKLabel] = parseFloat(vitKInputValue)

      const cholineInputValue = document.getElementById('choline').value
      const cholineLabel = document.querySelector('label[for="choline"]').textContent
      obj[cholineLabel] = parseFloat(cholineInputValue)

      const betaineInputValue = document.getElementById('betaine').value
      const betaineLabel = document.querySelector('label[for="betaine"]').textContent
      obj[betaineLabel] = parseFloat(betaineInputValue)

      const calciumInputValue = document.getElementById('calcium').value
      const calciumLabel = document.querySelector('label[for="calcium"]').textContent
      obj[calciumLabel] = parseFloat(calciumInputValue)

      const copperInputValue = document.getElementById('copper').value
      const copperLabel = document.querySelector('label[for="copper"]').textContent
      obj[copperLabel] = parseFloat(copperInputValue)

      const fluorideInputValue = document.getElementById('fluoride').value
      const fluorideLabel = document.querySelector('label[for="fluoride"]').textContent
      obj[fluorideLabel] = parseFloat(fluorideInputValue)

      const ironInputValue = document.getElementById('iron').value
      const ironLabel = document.querySelector('label[for="iron"]').textContent
      obj[ironLabel] = parseFloat(ironInputValue)

      const magnesiumInputValue = document.getElementById('magnesium').value
      const magnesiumLabel = document.querySelector('label[for="magnesium"]').textContent
      obj[magnesiumLabel] = parseFloat(magnesiumInputValue)

      const manganeseInputValue = document.getElementById('manganese').value
      const manganeseLabel = document.querySelector('label[for="manganese"]').textContent
      obj[manganeseLabel] = parseFloat(manganeseInputValue)

      const phosphorusInputValue = document.getElementById('phosphorus').value
      const phosphorusLabel = document.querySelector('label[for="phosphorus"]').textContent
      obj[phosphorusLabel] = parseFloat(phosphorusInputValue)

      const potassiumInputValue = document.getElementById('potassium').value
      const potassiumLabel = document.querySelector('label[for="potassium"]').textContent
      obj[potassiumLabel] = parseFloat(potassiumInputValue)

      const seleniumInputValue = document.getElementById('selenium').value
      const seleniumLabel = document.querySelector('label[for="selenium"]').textContent
      obj[seleniumLabel] = parseFloat(seleniumInputValue)

      const sodiumInputValue = document.getElementById('sodium').value
      const sodiumLabel = document.querySelector('label[for="sodium"]').textContent
      obj[sodiumLabel] = parseFloat(sodiumInputValue)

      const zincInputValue = document.getElementById('zinc').value
      const zincLabel = document.querySelector('label[for="zinc"]').textContent
      obj[zincLabel] = parseFloat(zincInputValue)

      addNewData(obj)
      // eslint-disable-next-line
      foodForm.reset()
      // eslint-disable-next-line
      bootstrap.Modal.getInstance(document.getElementById('foodModal')).hide()
    }
    // eslint-disable-next-line
    foodForm.classList.add('was-validated')
  }, false)
})

// function that manages adding particular food entity to the table (with quantity check) bookmark 1

// foodName is a string
function addFood (foodName) {
  const rows = document.querySelectorAll('.food-table tbody tr')

  // Check if the food is already in the table
  for (const row of rows) {
    if (row.cells[1].textContent === foodName) {
      const quantity = parseInt(row.cells[0].textContent)
      row.cells[0].textContent = quantity + 1
      return
    }
  }

  // append elements to table
  const tableBody = document.querySelector('.food-table tbody')
  const newRow = document.createElement('tr')

  const firstColumn = document.createElement('td')
  firstColumn.textContent = '1'
  newRow.appendChild(firstColumn)

  const secondColumn = document.createElement('td')
  secondColumn.textContent = foodName
  newRow.appendChild(secondColumn)

  const thirdColumn = document.createElement('td')
  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'btn btn-outline-success delete-food'
  button.innerHTML = '&times;'

  thirdColumn.appendChild(button)
  newRow.appendChild(thirdColumn)

  tableBody.appendChild(newRow)
}

// event listener that realizes deletion from food table with button
document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('.food-table tbody')

  tableBody.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('delete-food')) {
      const button = event.target
      const row = button.closest('tr')
      const quantity = parseInt(row.cells[0].textContent)

      if (quantity > 1) {
        row.cells[0].textContent = quantity - 1
      } else {
        row.remove()
      }
      updateRecipes()
    }
  })
})

// function for retrieving food names from database

function getFoodNames () {
  return fetch('/getFoodNames')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .catch(error => console.error('Error fetching food names:', error))
}

// function that adds checkboxes with food when add food button pressed

// input is string
function addFoodCheckbox (foodName) {
  const container = document.createElement('div')
  container.className = 'form-check d-flex align-items-center'

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = 'form-check-input me-2'
  checkbox.id = 'check_' + foodName
  checkbox.name = 'food'
  checkbox.value = foodName

  const labelCheckbox = document.createElement('label')
  labelCheckbox.className = 'form-check-label me-auto'
  labelCheckbox.htmlFor = 'check_' + foodName
  labelCheckbox.textContent = foodName

  const numberInput = document.createElement('input')
  numberInput.type = 'number'
  numberInput.className = 'form-control'
  numberInput.id = 'num_' + foodName
  numberInput.name = 'quantity'
  numberInput.value = '1'
  numberInput.min = '1'

  container.appendChild(checkbox)
  container.appendChild(labelCheckbox)
  container.appendChild(numberInput)

  document.getElementById('foodListForm').appendChild(container)
};

// event listener that create checkbox form when pressed add food

document.getElementById('add-food').addEventListener('click', () => {
  getFoodNames().then(namesList => {
    if (namesList) {
      const form = document.getElementById('foodListForm')
      form.innerHTML = ''
      namesList.forEach(foodName => {
        addFoodCheckbox(foodName)
      })
    }
  })
})

// event listener for hiding add food modal when submitted
document.getElementById('foodListModal').addEventListener('hide.bs.modal', function () {
  document.getElementById('foodListForm').reset()
})

// bookmark 2
// function for adding desired, checked in modal food to the table
document.getElementById('foodListForm').addEventListener('submit', function (event) {
  event.preventDefault()

  document.querySelectorAll('#foodListForm input[name="food"]:checked').forEach(checkbox => {
    const foodName = checkbox.value
    const quantity = parseInt(document.getElementById('num_' + foodName).value, 10)
    if (!isNaN(quantity)) {
      for (let i = quantity; i > 0; i--) {
        addFood(foodName)
      }
      updateRecipes() // udating recipes each time new food is added
    }
  })
  // eslint-disable-next-line
  bootstrap.Modal.getInstance(document.getElementById('foodListModal')).hide()
})

// function that fetches recipes that are applicable to table and adds them to table
function updateRecipes () {
  // 1. Collect food table data
  const table = document.querySelector('.food-table tbody')
  const data = {}

  table.querySelectorAll('tr').forEach(function (row) {
    const cells = row.querySelectorAll('td')
    const food = cells[1].innerText
    const number = parseInt(cells[0].innerText, 10)
    data[food] = number
  })

  // 2. Get available recipes asynchronously and update the table
  getAvailableRecipes(data).then(recipes => {
    if (recipes) {
      addRecipesToTable(recipes)
    } else {
      console.error('No recipes received')
    }
  }).catch(error => {
    console.error('Error in getting recipes:', error)
  })
}

// function for sending table data and recieving the array with available recipes

// input is object output is array
function getAvailableRecipes (tableData) {
  return fetch('/api/getAvailableRecipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tableData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(recipes => {
      // turn into array
      return recipes
    })
    .catch(error => {
      console.error('There has been a problem with fetch operation:', error)
    })
}

function addRecipesToTable (recipes) {
  const tableBody = document.getElementById('table-body')

  tableBody.innerHTML = ''

  recipes.forEach(function (recipe) {
    const row = document.createElement('tr')
    const cell = document.createElement('td')

    cell.textContent = recipe

    row.appendChild(cell)

    tableBody.appendChild(row)
  })
}

// event listener that pops up information about food when it is clicked in the table
document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('.food-table tbody')

  tableBody.addEventListener('click', function (event) {
    if (event.target.closest('.delete-food')) {
      event.stopPropagation()
      return
    }

    const row = event.target.closest('tr')
    if (row) {
      const foodName = row.cells[1].textContent
      showFoodInfo(foodName).then(foodInfo => {
        const modalBody = document.getElementById('modalBody')
        modalBody.innerHTML = '' // Clear previous content

        Object.keys(foodInfo).forEach(key => {
          const p = document.createElement('p')
          p.textContent = `${key}: ${foodInfo[key]}`
          modalBody.appendChild(p)
        })
        // eslint-disable-next-line
        const myModal = new bootstrap.Modal(document.getElementById('foodInfoModal'))
        myModal.show()
      }).catch(error => {
        console.error('Error fetching food info:', error)
      })
    }
  })
})

// function for retrieving food info by sending name

function showFoodInfo (foodName) {
  return fetch('/get-food-details', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ foodName })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.error('There has been a problem with fetch operation:', error)
    })
}

// function for adding new recipe to db bookmark 3

// input is object
function addNewRecipe (data) {
  fetch('/api/addRecipe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    // server response message
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
      updateRecipes()
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

// event listener that handles creating new recipie with modal and forms
document.addEventListener('DOMContentLoaded', function () {
  const recipeForm = document.getElementById('recipeForm')
  const foodRecipeListForm = document.getElementById('foodRecipeListForm')
  const addRecipeModal = document.getElementById('addRecipeModal')

  addRecipeModal.addEventListener('show.bs.modal', function () {
    recipeForm.reset()
    foodRecipeListForm.reset()
    recipeForm.classList.remove('was-validated')
  })

  recipeForm.addEventListener('submit', function (event) {
    if (!recipeForm.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()

      const obj = {}
      const recipeNameInputValue = document.getElementById('recipeName').value
      const recipeNameLabel = document.querySelector('label[for="recipeName"]').textContent
      obj[recipeNameLabel] = recipeNameInputValue

      const durationInputValue = document.getElementById('duration').value
      const durationLabel = document.querySelector('label[for="duration"]').textContent
      obj[durationLabel] = durationInputValue

      const recipeDescriptionValue = document.getElementById('recipeDescription').value
      const recipeDescriptionLabel = document.querySelector('label[for="recipeDescription"]').textContent
      obj[recipeDescriptionLabel] = recipeDescriptionValue

      // Get checked items from the checkboxes
      obj.Ingredients = getCheckedItems()

      addNewRecipe(obj)
      // eslint-disable-next-line
      bootstrap.Modal.getInstance(addRecipeModal).hide()
    }
    recipeForm.classList.add('was-validated')
  }, false)
})

// function that gathers checked items from recipeCreate form in modal
function getCheckedItems () {
  const checkedItems = []
  const allCheckboxes = document.querySelectorAll('#foodRecipeListForm input[type="checkbox"]')

  allCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const foodName = checkbox.value
      const quantity = document.getElementById('num' + foodName).value
      checkedItems.push({ name: foodName, quantity: parseInt(quantity) })
    }
  })

  return checkedItems
}

// function that adds checkboxes into create recipe modal form
function addFoodRecipeCheckbox (foodName) {
  const container = document.createElement('div')
  container.className = 'form-check d-flex align-items-center'

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = 'form-check-input me-2'
  checkbox.id = 'check_' + foodName
  checkbox.name = 'food'
  checkbox.value = foodName

  const labelCheckbox = document.createElement('label')
  labelCheckbox.className = 'form-check-label me-auto'
  labelCheckbox.htmlFor = 'check_' + foodName
  labelCheckbox.textContent = foodName

  const numberInput = document.createElement('input')
  numberInput.type = 'number'
  numberInput.className = 'form-control'
  numberInput.id = 'num' + foodName
  numberInput.name = 'quantity'
  numberInput.value = '1'
  numberInput.min = '1'

  container.appendChild(checkbox)
  container.appendChild(labelCheckbox)
  container.appendChild(numberInput)

  document.getElementById('foodRecipeListForm').appendChild(container)
};

// event listeners for udating create recipe forms and modal
document.getElementById('create-recipe').addEventListener('click', () => {
  getFoodNames().then(namesList => {
    if (namesList) {
      namesList.forEach(foodName => {
        addFoodRecipeCheckbox(foodName)
      })
    }
  })
})

document.getElementById('create-recipe').addEventListener('click', () => {
  getFoodNames().then(namesList => {
    if (namesList) {
      const form = document.getElementById('foodRecipeListForm')
      form.innerHTML = ''
      namesList.forEach(foodName => {
        addFoodRecipeCheckbox(foodName)
      })
    }
  })
})

// event listener that pops up information about recipe when it is clicked in the table

document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('.recipe-table tbody')

  tableBody.addEventListener('click', function (event) {
    const row = event.target.closest('tr')
    if (row) {
      const recipeName = row.cells[0].textContent

      showRecipeInfo(recipeName).then(recipeInfo => {
        const modalBody = document.getElementById('recipeInfoModalBody')
        modalBody.innerHTML = ''

        Object.keys(recipeInfo).forEach(key => {
          const p = document.createElement('p')

          if (typeof recipeInfo[key] === 'object' && recipeInfo[key] !== null) {
            if (Array.isArray(recipeInfo[key])) {
              let content = `${key}: <ul>`

              recipeInfo[key].forEach(item => {
                const itemDetails = Object.keys(item).map(property => `${property}: ${item[property]}`).join(', ')
                content += `<li>${itemDetails}</li>`
              })
              content += '</ul>'
              p.innerHTML = content
            } else {
              const objectDetails = Object.keys(recipeInfo[key]).map(property => `${property}: ${recipeInfo[key][property]}`).join(', ')
              p.textContent = `${key}: ${objectDetails}`
            }
          } else {
            p.textContent = `${key}: ${recipeInfo[key]}`
          }
          modalBody.appendChild(p)
        })
        // eslint-disable-next-line
        const myModal = new bootstrap.Modal(document.getElementById('recipeInfoModal'))
        myModal.show()
      }).catch(error => {
        console.error('Error fetching food info:', error)
      })
    }
  })
})

// function for retrieving recipe info by sending name

function showRecipeInfo (recipeName) {
  return fetch('/api/getRecipeDetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ recipeName })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.error('There has been a problem with fetch operation:', error)
    })
}

// recipe journal button that adds all the recipes to table and back

document.addEventListener('DOMContentLoaded', () => {
  let count = 0

  document.getElementById('recipe-journal').addEventListener('click', function (event) {
    count++

    if (!(count % 2 === 0)) {
      document.getElementById('recipe-journal').style.backgroundColor = 'rgb(186, 192, 35)'
      document.getElementById('recipe-journal').style.color = 'black'
      document.getElementById('add-food').style.display = 'none'
      document.getElementById('create-food').style.display = 'none'
      document.getElementById('create-recipe').style.display = 'none'
      document.querySelectorAll('.delete-food').forEach(button => { button.style.display = 'none' })
      // recieve recipes and add to table
      getAllRecipes().then(allRecipes => {
        if (allRecipes) {
          addRecipesToTable(allRecipes)
        }
      })
    } else {
      document.getElementById('recipe-journal').style.backgroundColor = 'rgb(40, 128, 30)'
      document.getElementById('recipe-journal').style.color = '#a7ff95'
      document.getElementById('add-food').style.display = ''
      document.getElementById('create-food').style.display = ''
      document.getElementById('create-recipe').style.display = ''
      document.querySelectorAll('.delete-food').forEach(button => { button.style.display = '' })

      updateRecipes()
    }
  })
})

function getAllRecipes () {
  return fetch('/api/getAllRecipes')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .catch(error => console.error('Error fetching recipie names:', error))
}
