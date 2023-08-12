const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getMealsCategoriesNames = async () => {
  return fetch(`${BASE_URL}/categories.php`)
    .then((r) => r.json())
    .then((r) => r.categories.map((category) => category.strCategory));
};

export const getMealsByCategoryName = async (categoryName) => {
  return fetch(`${BASE_URL}/filter.php?c=${categoryName}`).then((r) =>
    r.json().then((r) => r.meals)
  );
};
