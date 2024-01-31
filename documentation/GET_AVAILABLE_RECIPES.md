# Get Available Recipes

**Endpoint**: /api/getAvailableRecipes

**Method**: POST

**Description**: Retrieves a list of possible recipes based on ingredients in request.

**Parameters**:

- "food name": value (number of "food name" in table)

**Responses**:
200: Successfully returns a list of possible recipes.
500: Error reading the database file.

**Example request**:
json

```json
{ "Potato (with skin)": "2" }
```

**Example response**

json

```json
["Potatoe salad", "Chips"]
```
