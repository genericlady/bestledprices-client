export const fetchPrices = (query: string | undefined) => (
  fetch(`http://localhost:3000/search/${query}`)
    .then(response => response.json())
    .catch(fail => console.log(fail))
)

