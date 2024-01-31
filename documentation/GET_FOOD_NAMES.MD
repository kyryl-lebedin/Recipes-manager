# Get food names

**Endpoint**: /getFoodNames

**Method**: GET

**Description**: Returns all the food names in db.

**Responses**:
200 OK: Successfully returns an array, json string of food names.
500 Internal Server Error: Error reading the database file.

**Example response**:

json

```json
["Chicken", "Fish", "Avocado"]
```
