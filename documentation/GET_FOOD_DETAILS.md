# Get food names

**Endpoint**: /get-food-details

**Method**: POST

**Description**: Gets deatails about praticular food entity from db.

**Parameters**:

- "Food 100g"

**Responses**:
200: Successfully returns food item details.
404: Food item not found.
500: Error reading the database file.

**Example request**:
json

```json
{"Potato (with skin)"}
```

**Example response**

json

```json
{
  "Food (100g)": "Potato (with skin)",
  "Calories (kCal)": 77,
  "Carbohydrates (g)": 17.49,
  "Fats (g)": 2.1,
  "Saturated (g)": 15.39,
  "MUFA (g)": 0.09,
  "PUFA (g)": 2.05,
  "PUFA-ω6 (g)": 0,
  "PUFA-ω3 (g)": 2,
  "Protein (g)": 0.081,
  "Vit-A RAE (µg)": 0.032,
  "Vit-A (IU)": 1.061,
  "Vit-B1 (mg)": 0.295,
  "Vit-B2 (mg)": 0.298,
  "Vit-B3 (mg)": 15,
  "Vit-B5 (mg)": 19.7,
  "Vit-B6 (mg)": 0.01,
  "Vit-B9 (µg)": 2,
  "Vit-B12 (µg)": 12.1,
  "Vit-C (mg)": 0.2,
  "Vit-D (µg)": 12,
  "Vit-E (mg)": 0.11,
  "Choline (mg)": 0.81,
  "Betaine (mg)": 23,
  "Calcium (mg)": 0.153,
  "Copper (mg)": 57,
  "Fluoride (µg)": 425,
  "Iron (mg)": 0.4,
  "Magnesium (mg)": 6,
  "Manganese (mg)": 0.3
}
```
