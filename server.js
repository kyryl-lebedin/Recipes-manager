const express = require('express');
const fs = require('fs');
const dataHandler = require('./my_node_modules/dataHandler');
const app = express();
const port = 3000;



//GET returns all the list of food names
app.get("/api/foodNames"), (req, res) => {
  const foodNames = dataHandler.getFoodNames();
  res.json(foodNames);
}




app.use(express.static('client'));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});



