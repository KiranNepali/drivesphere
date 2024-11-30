export async function fetchCars() {
  const headers = {
    headers: {
      "x-rapidapi-key": "5762f9ce14msha191b56dfcc34b3p1e72ddjsnd60035e0c46d",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  // Make the fetch request to the API with the provided headers
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", // API URL
    headers // Pass headers directly
  );

  // Parse the JSON response from the API
  const result = await response.json();
  return result; // Return the fetched data
}

// const fetch = require("node-fetch");

// const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "5762f9ce14msha191b56dfcc34b3p1e72ddjsnd60035e0c46d",
//     "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
