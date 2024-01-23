const express = require('express');
const dataHandler = require('./my_node_modules/dataHandler');
const app = express();
const port = 3000;

app.use(express.static('client'));

app.get("/api/foodNames", (req, res) => {
  try {
    const foodNames = dataHandler.getFoodNames();
    res.json(foodNames);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);


});
