const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const cors =require('cors')

app.use(cors());

app.use(express.json())
app.use(express.static('client'));


app.post('/api/addData', (req, res) => {
    
    const newData = req.body;

    fs.readFile('serverdb.json', 'utf8', (err, data) => {
        //check if json is readable
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading the database file.');
        }

        //convert json data into obj and update it with new data
        try {
            db = JSON.parse(data);
        } catch (parseErr) {
            console.error(parseErr);
            
            return res.status(500).json({ message: 'Error parsing the database file. Invalid JSON.' });
        }
        db.push(newData);


        //write updated data back
        fs.writeFile('serverdb.json', JSON.stringify(db, null, 2), (err) => {
            
            if (err) {
                console.error(err);
                return res.status(500).send('Error writing to the database file.');
            }
            
            res.status(200).json({ message: 'Data added successfully' });
        });


    });
});



app.get('/getFoodNames', (req, res) => {
    fs.readFile('serverdb.json', 'utf8', (err, data) => {
        //check if json is readable
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading the database file.');
        }

        try {
            const jsonData = JSON.parse(data);
            const foodNames = jsonData.map(item => item["Food (100g)"]);
            res.json(foodNames);
        } catch (err) {
            res.status(500).send('Error parsing the database file. Invalid JSON.');
        }
    });
});


app.post('/get-food-details', (req, res) => {
    const foodName = req.body.foodName;

    fs.readFile('serverdb.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading the database file.');
        }

        try {
            const jsonData = JSON.parse(data);
            const foodItem = jsonData.find(item => item['Food (100g)'] === foodName);
            if (foodItem) {
                res.json(foodItem);
            } else {
                res.status(404).send('Food item not found');
            }
        } catch (err) {
            res.status(500).send('Error parsing the database file. Invalid JSON.');
        }
    });
});


app.post('/api/getAvailableRecipes', (req, res) => {
    const food = req.body;

    fs.readFile('recipesdb.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading the database file.');
        }

        try {
            const recipes = JSON.parse(data); 
            let possibleRecipes = [];

            recipes.forEach(recipe => {
                let canMake = true;

                recipe.Ingredients.forEach(ingredient => {
                    if (!food[ingredient.name] || food[ingredient.name] < parseInt(ingredient.quantity)) {
                        canMake = false;
                    }
                });

                if (canMake) {
                    possibleRecipes.push(recipe["Recipe Name"]);
                }
            });

            res.json(possibleRecipes);

        } catch (err) {
            console.error(err);
            res.status(500).send('Error parsing the database file. Invalid JSON.');
        }
    });
});



app.post('/api/addRecipe', (req, res) => {
    
    const newData = req.body;

    fs.readFile('recipesdb.json', 'utf8', (err, data) => {
        //check if json is readable
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading the database file.');
        }

        //convert json data into obj and update it with new data
        try {
            db = JSON.parse(data);
        } catch (parseErr) {
            console.error(parseErr);
            
            return res.status(500).json({ message: 'Error parsing the database file. Invalid JSON.' });
        }
        db.push(newData);


        //write updated data back
        fs.writeFile('recipesdb.json', JSON.stringify(db, null, 2), (err) => {
            
            if (err) {
                console.error(err);
                return res.status(500).send('Error writing to the database file.');
            }
            
            res.status(200).json({ message: 'Data added successfully' });
        });


    });
});

app.post('/api/getRecipeDetails', (req, res) => {
    const recipeName = req.body.recipeName;

    fs.readFile('recipesdb.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading the database file.');
        }

        try {
            const jsonData = JSON.parse(data);
            const recipeItem = jsonData.find(item => item['Recipe Name'] === recipeName);
            
            if (recipeItem) {
                res.json(recipeItem);
            } else {
                res.status(404).send('Recipe item not found');
            }
        } catch (err) {
            console.error(err);
            res.status(500).send('Error parsing the database file. Invalid JSON.');
        }
    });
});

app.get('/api/getAllRecipes', (req, res) => {
    fs.readFile('recipesdb.json', 'utf8', (err, data) => {
        //check if json is readable
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading the database file.');
        }

        try {
            const jsonData = JSON.parse(data);
            const recipeNames = jsonData.map(item => item["Recipe Name"]);
            res.json(recipeNames);
        } catch (err) {
            res.status(500).send('Error parsing the database file. Invalid JSON.');
        }
    });
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});