const fs = require('fs').promises
const request = require('supertest')
const app = require('./server')

const recipeDbPath = './recipesdb.json'
const serverDbPath = './serverdb.json'
const recipeBackupPath = `${recipeDbPath}.backup`
const serverBackupPath = `${serverDbPath}.backup`

async function backupFile (source, target) {
  const data = await fs.readFile(source)
  await fs.writeFile(target, data)
}

async function restoreFile (source, target) {
  const data = await fs.readFile(source)
  await fs.writeFile(target, data)
  await fs.unlink(source)
}

describe('API Tests', () => {
  beforeAll(async () => {
    await backupFile(recipeDbPath, recipeBackupPath)
    await backupFile(serverDbPath, serverBackupPath)
  })

  afterAll(async () => {
    await restoreFile(recipeBackupPath, recipeDbPath)
    await restoreFile(serverBackupPath, serverDbPath)
  })

  test('POST /api/addData adds new food data', async () => {
    const newFoodData = {
      'Food (100g)': 'chicken',
      'Calories (kCal)': 123,
      'Carbohydrates (g)': 12,
      'Fats (g)': 123,
      'Protein (g)': 123,
      'Fiber (g)': 123,
      'Net Carbs (g)': 2,
      'Saturated (g)': 0,
      'MUFA (g)': 0,
      'PUFA (g)': 0,
      'PUFA-ω6 (g)': 0,
      'PUFA-ω3 (g)': 0,
      'Vit-A RAE (µg)': 0,
      'Vit-A (IU)': 0,
      'Vit-B1 (mg)': 0,
      'Vit-B2 (mg)': 0,
      'Vit-B3 (mg)': 0,
      'Vit-B5 (mg)': 0,
      'Vit-B6 (mg)': 0,
      'Vit-B9 (µg)': 0,
      'Vit-B12 (µg)': 0,
      'Vit-C (mg)': 0,
      'Vit-D (µg)': 0,
      'Vit-E (mg)': 0,
      'Vit-K (µg)': 0,
      'Choline (mg)': 0,
      'Betaine (mg)': 0,
      'Calcium (mg)': 0,
      'Copper (mg)': 0,
      'Fluoride (µg)': 0,
      'Iron (mg)': 0,
      'Magnesium (mg)': 123,
      'Manganese (mg)': 12,
      'Phosphorus (mg)': 0,
      'Potassium (mg)': 0,
      'Selenium (µg)': 0,
      'Sodium (mg)': 0,
      'Zinc (mg)': 0
    }
    await request(app)
      .post('/api/addData')
      .send(newFoodData)
      .expect(200)
      .then(response => {
        expect(response.body.message).toEqual('Data added successfully')
      })
  })

  // retrieving food names
  test('GET /getFoodNames returns an array of food names', async () => {
    await request(app)
      .get('/getFoodNames')
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
      })
  })

  // getting added food name
  test('POST /get-food-details returns details for a specific food', async () => {
    const foodNameRequest = { foodName: 'chicken' }
    await request(app)
      .post('/get-food-details')
      .send(foodNameRequest)
      .expect(200)
      .then(response => {
        expect(response.body).toHaveProperty('Food (100g)', foodNameRequest.foodName)
      })
  })

  // getting existing food name
  test('POST /get-food-details returns details for a specific food', async () => {
    const foodNameRequest = { foodName: 'Parmesan Cheese' }
    await request(app)
      .post('/get-food-details')
      .send(foodNameRequest)
      .expect(200)
      .then(response => {
        expect(response.body).toHaveProperty('Food (100g)', foodNameRequest.foodName)
      })
  })

  // adding a new recipe
  test('POST /api/addRecipe adds a new recipe', async () => {
    const newRecipe = {
      'Recipe Name': 'Boiled Chicken',
      'Duration (min)': '30',
      'Recipe Description': 'boil the chicken',
      Ingredients: [
        { name: 'chicken', quantity: '2' }
      ]
    }
    await request(app)
      .post('/api/addRecipe')
      .send(newRecipe)
      .expect(200)
      .then(response => {
        expect(response.body.message).toEqual('Data added successfully')
      })
  })

  // getting available recipes based on ingredients
  test('POST /api/getAvailableRecipes returns available recipes based on ingredients', async () => {
    const ingredientsAvailable = {
      chicken: 2
    }
    await request(app)
      .post('/api/getAvailableRecipes')
      .send(ingredientsAvailable)
      .expect(200)
      .then(response => {
        expect(response.body).toContain('Boiled Chicken')
      })
  })

  // fetching recipe details
  test('POST /api/getRecipeDetails returns details for a specific recipe', async () => {
    const recipeRequest = { recipeName: 'Vegetable Stir-Fry' }
    await request(app)
      .post('/api/getRecipeDetails')
      .send(recipeRequest)
      .expect(200)
      .then(response => {
        expect(response.body).toHaveProperty('Recipe Name', recipeRequest.recipeName)
        expect(response.body).toHaveProperty('Duration (min)', '15')
        expect(response.body).toHaveProperty('Recipe Description', expect.any(String))
        expect(response.body).toHaveProperty('Ingredients')
        expect(response.body.Ingredients).toEqual(expect.arrayContaining([
          { name: 'Broccoli', quantity: 1 },
          { name: 'Carrot', quantity: 1 },
          { name: 'Bell Pepper', quantity: 1 },
          { name: 'Mushrooms', quantity: 1 },
          { name: 'Soy Sauce', quantity: 2 }
        ]))
      })
  })

  // getting all recipes
  test('GET /api/getAllRecipes returns all recipe names', async () => {
    await request(app)
      .get('/api/getAllRecipes')
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
        expect(response.body).toEqual(expect.arrayContaining(['Chicken pie', 'Chicken and Fish Salad', 'Avocado Toast', 'Pasta Carbonara', 'Vegetable Stir-Fry', 'Boiled Chicken']))
      })
  })

  // adding food item
  test('POST /api/addData successfully adds a new food item', async () => {
    const newFood = {
      'Food (100g)': 'Test Food',
      'Calories (kCal)': 133,
      'Carbohydrates (g)': 6.32,
      'Fats (g)': 4.28,
      'Saturated (g)': 1.59,
      'MUFA (g)': 0.81,
      'PUFA (g)': 0.26,
      'PUFA-ω6 (g)': 0.25,
      'PUFA-ω3 (g)': 0.01,
      'Protein (g)': 16.37,
      'Vit-A RAE (µg)': 9309,
      'Vit-A (IU)': 30998,
      'Vit-B1 (mg)': 0.562,
      'Vit-B2 (mg)': 0.892,
      'Vit-B3 (mg)': 6.5,
      'Vit-B5 (mg)': 6.184,
      'Vit-B6 (mg)': 0.76,
      'Vit-B9 (µg)': 738,
      'Vit-B12 (µg)': 54,
      'Vit-C (mg)': 4.5,
      'Calcium (mg)': 43,
      'Copper (mg)': 7.522,
      'Iron (mg)': 30.53,
      'Magnesium (mg)': 24,
      'Manganese (mg)': 0,
      'Phosphorus (mg)': 261,
      'Potassium (mg)': 230,
      'Selenium (µg)': 68.1,
      'Sodium (mg)': 140,
      'Zinc (mg)': 3.07
    }
    await request(app)
      .post('/api/addData')
      .send(newFood)
      .expect(200)
  })

  // listing all food items
  test('GET /getFoodNames successfully returns a list of food names', async () => {
    await request(app)
      .get('/getFoodNames')
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy()
      })
  })

  // adding a new recipe
  test('POST /api/addRecipe successfully adds a new recipe', async () => {
    const newRecipe = {
      'Recipe Name': 'Fish Pie',
      'Duration (min)': '30',
      'Recipe Description': 'description',
      Ingredients: [
        { name: 'Fish Salmon Atlantic Farmed', quantity: '1' }
      ]
    }
    await request(app)
      .post('/api/addRecipe')
      .send(newRecipe)
      .expect(200)
      .then(response => {
        expect(response.body).toHaveProperty('message', 'Data added successfully')
      })
  })

  // returning recipes based on available ingredients
  test('POST /api/getAvailableRecipes returns recipes based on available ingredients', async () => {
    const ingredients = { 'Fish Salmon Atlantic Farmed': 1 }
    await request(app)
      .post('/api/getAvailableRecipes')
      .send(ingredients)
      .expect(200)
      .then(response => {
        expect(response.body).toContain('Fish Pie')
      })
  })
})
