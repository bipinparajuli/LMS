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
//delete book
export const deleteBook = (userid,bookid,token) => {
  // console.log(token)
  return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/book/deletebook/${userid}/${bookid}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
     console.log(response)
        return response.json();
      })
      .catch(err => console.log(err))
}

//add book
export const addBook = (id,token,data) => {
 console.log(JSON.stringify(data))
  return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/book/createbook/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body:JSON.stringify(data)
  })
    .then(response => {
   console.log(response)
      return response.json();
    })
    .catch(err => console.log(err))
}

//getting book by id 
export const getBookById = (id)=> {
  return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/book/getbook/${id}`,
  {
    method:"GET",
  
  }
  ).then(response => 
    {
console.log(response)
      return response.json()
    })
    
    
  .catch(e=>console.log(e))
}

//update book 

export const updateBook = (uid,bid,token,data) => {
  console.log(data)
  return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/book/updatebook/${uid}/${bid}`,
  {
    method:"PUT",
    headers:{
 "Content-Type":"application/json",
 "Authorization":`Bearer ${token}`     
    },
    body:JSON.stringify(data)
  })
}

//getting book by id 
export const searchBookByName = (name)=> {
  return fetch(`http://localhost:8000/api/search/book/${name}`,
  {
    method:"GET",
  
  }
  ).then(response => 
    {
console.log(response)
      return response.json()
    })
    
    
  .catch(e=>console.log(e))
}
