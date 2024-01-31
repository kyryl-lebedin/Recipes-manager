# Get All Recipes

**Endpoint**: /api/getAllRecipes

**Method**: GET

**Description**: Retrieves a list of all recipe names from the database.

**Responses**:
200: Successfully returns a list of recipe names.
500: Error reading the database file.

**Example response**:

json

```json
[
  "Chicken pie",
  "Chicken and Fish Salad",
  "Avocado Toast",
  "Pasta Carbonara",
  "Vegetable Stir-Fry",
  "Boiled Chicken"
]
```
