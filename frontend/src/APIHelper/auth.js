
const {API} = require("../Backend")

export const Login  = (user) => {
 return fetch (`https://mysterious-woodland-24801.herokuapp.com/api/signin`,{
     method:"POST",
     headers:{
        Accept:"application/json",
         "Content-Type":"application/json"
     },
     body:JSON.stringify(user)
 })
 .then(data=> {return data.json()})
 .catch(e=> {return e})
    
}

export const getallusers = () => {
    return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/students`,
    {
        method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
}
    )
    .then(response =>  {return response.json()})
    .catch(e=> console.log(e))
}

//adding student by admin
export const addStudent = (id,token,data) => {
    return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/addstudent/${id}`,{
method:"POST",
headers:{
    "Content-Type":"Application/json",
    Authorization:`Bearer ${token}`
},
body:JSON.stringify(data)
    }).then(data=> data.json())
    .catch(e=> console.log(e))
}
//deleting student by admin
export const deleteStudent = (uid,sid,token) => {
 console.log(uid,sid)
    return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/student/deletestudent/${uid}/${sid}`,
    {
        method:"DELETE",
        headers:{
            "Content-Type":"Application/json",
            Authorization:`Bearer ${token}`
        }
    }
    
    )
}