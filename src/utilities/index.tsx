export const fetchProducts = (query: string | undefined) => (
  fetch(`http://localhost:3000/search/${query}`)
    .then(response => {
      return response.json();
    })
    .catch(fail => console.log(fail))
)
