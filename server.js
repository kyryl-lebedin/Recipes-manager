const express = require('express');
const bodyParser = require('body-parser');
const dataHandler = require('./my_node_modules/dataHandler');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(express.json());


app.get("/api/foodNames", (req, res) => {
  try {
    const foodNames = dataHandler.getFoodNames();
    res.json(foodNames);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get("/api/foodInfo", (req, res) => {
  const foodName = req.query.name;
  const allFoods = dataHandler.getAllFoods();
  const foodInfo = allFoods.find(food => food['Food (100g)'] === foodName);

  if (foodInfo) {
      res.json(foodInfo);
  } else {
      res.status(404).send('Food item not found');
  }
});


app.post("/api/addFood", (req, res) => {
  try {
      const newFood = req.body;
      dataHandler.addNewFood(newFood); // Updated function name
      res.status(201).send('Food item added');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});


app.post('/api/checkRecipes', (req, res) => {
  const ingredients = req.body.ingredients;
  const recipes = loadRecipesFromJson(); // Load your recipes from the JSON file

  const results = recipes.map(recipe => {
      return {
          recipeName: recipe.name,
          canMake: recipe.ingredients.every(ri => 
              ingredients.some(i => i.name === ri.name && i.quantity >= ri.quantity)
          )
      };
  });

  res.json(results);
});

function loadRecipesFromJson() {
  // Load and parse the JSON file with recipes
  // This is just a placeholder function
  return JSON.parse(fs.readFileSync('recipes.json', 'utf8'));
}




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);


});
