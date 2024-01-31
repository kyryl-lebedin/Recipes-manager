# Add recipe

**Endpoint**: /api/addRecipe

**Method**: POST

**Description**: Adds a new recipe to the recipes database.

**Parameters**:

- Recipe name
- Duration(min)
- Recipe description
- Ingredients

**Responses**:
200: Recipe added successfully.
500: Error reading or writing the recipes database.

**Example request**:
json

```json
{
  "Recipe Name": "Avocado Toast",
  "Duration (min)": "10",
  "Recipe Description": "Toast bread\nSpread avocado on top\nAdd salt and pepper",
  "Ingredients": [
    {
      "name": "Avocado",
      "quantity": 1
    },
    {
      "name": "Bread",
      "quantity": 1
    }
  ]
}
```
