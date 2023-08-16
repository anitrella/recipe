const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getMealsCategories = async () => {
  return fetch(`${BASE_URL}/categories.php`)
    .then((r) => r.json())
    
};

export const getMealsByCategoryName = async (categoryName) => {
  return fetch(`${BASE_URL}/filter.php?c=${categoryName}`).then((r) =>
    r.json().then((r) => r.meals)
  );
};

export const getMealDetails = async (id) => {
  return fetch(`${BASE_URL}/lookup.php?i=${id}`)
    .then((r) => r.json())
    .then((r) => r.meals[0]);
};
