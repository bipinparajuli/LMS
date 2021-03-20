
const {API} = require("../Backend")

export const Login  = (user) => {
    console.log(user)
 return fetch (`https://mysterious-woodland-24801.herokuapp.com/api/signin`,{
     method:"POST",
     headers:{
        Accept:"application/json",
         "Content-Type":"application/json"
     },
     body:JSON.stringify(user)
 })
 .then(data=> {return data.json()})
 .catch(e=>console.log(e))
    
}