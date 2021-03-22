export const getAllBook = () => {
    return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/book/getallbooks`, {
        method: "GET"
      })
        .then(response => {
       console.log(response)
          return response.json();
        })
        .catch(err => console.log(err))
}