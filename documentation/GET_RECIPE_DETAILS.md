# Get Recipe Details

**Endpoint**: /api/getRecipeDetails

**Method**: POST

**Description**: Fetches details of a specific recipe.

**Parameters**:

- "Recipe name"

**Responses**:
200: Successfully returns recipe details.
404: Recipe item not found.
500: Error reading the database file.

**Example request**:
json

```json
{"Pasta Carbonara"}
```

**Example response**

json

```json
{
  "Recipe Name": "Pasta Carbonara",
  "Duration (min)": "25",
  "Recipe Description": "Cook pasta\nFry bacon and garlic\nMix with eggs and cheese\nServe hot",
  "Ingredients": [
    {
      "name": "Spaghetti",
      "quantity": 1
    },
    {
      "name": "Bacon",
      "quantity": 4
    },
    {
      "name": "Garlic",
      "quantity": 2
    },
    {
      "name": "Egg Chicken",
      "quantity": 2
    },
    {
      "name": "Parmesan Cheese",
      "quantity": 1
    }
  ]
}
```
