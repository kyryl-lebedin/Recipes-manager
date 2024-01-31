# Add food data

**Endpoint**: /api/addData

**Method**: POST

**Description**: Adds data about new food entity to the server database.

**Parameters**:

- "Food (100g)"
- "Calories (kCal)"
- "Carbohydrates (g)"
- "Fats (g)"
- "Protein (g)"
- "Fiber (g)"
- "Net Carbs (g)"
- "Saturated (g)"
- "MUFA (g)"
- "PUFA (g)"
- "PUFA-ω6 (g)"
- "PUFA-ω3 (g)"
- "Vit-A RAE (µg)"
- "Vit-A (IU)"
- "Vit-B1 (mg)"
- "Vit-B2 (mg)"
- "Vit-B3 (mg)"
- "Vit-B5 (mg)"
- "Vit-B6 (mg)"
- "Vit-B9 (µg)"
- "Vit-B12 (µg)"
- "Vit-C (mg)"
- "Vit-D (µg)"
- "Vit-E (mg)"
- "Vit-K (µg)":
- "Choline (mg)"
- "Betaine (mg)"
- "Calcium (mg)"
- "Copper (mg)"
- "Fluoride (µg)"
- "Iron (mg)"
- "Magnesium (mg)"
- "Manganese (mg)"
- "Phosphorus (mg)"
- "Potassium (mg)"
- "Selenium (µg)"
- "Sodium (mg)"
- "Zinc (mg)"

**Responses**:
200 OK: Data added successfully.
500 Internal Server Error: Error reading or writing the database file.

**Examle request**:

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
