//get all deprtment list
export const getAllDepartment = (userId,token) => {
console.log(userId,token)
    return fetch (`http://localhost:8000/api/department/alldepartment/${userId}`,{
method:"GET",

headers:{
    "Content-Type":"application/json",
   "Authorization":`Bearer ${token}`
},
})
.then(response=>{
  return response.json()
})
.catch(er=>{
    console.log(er)
})
}

//get single department
export const getDepartment = (userId,token,departmentId) => {
        return fetch (`http://localhost:8000/api/department/department/${userId}/${departmentId}`,{
    method:"GET",
    
    headers:{
        "Content-Type":"application/json",
       "Authorization":`Bearer ${token}`
    },
    })
    .then(response=>{
      return response.json()
    })
    .catch(er=>{
        console.log(er)
    })
    }

//create new department
export const createDepartment = (userId,token,data) => {
    console.log(userId,token,data)
    return fetch(`http://localhost:8000/api/department/adddepartment/${userId}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        ,body:JSON.stringify(data)
    }).then(response=> {

return  response.json()
    }).catch(err=>{
        console.log(err)
    })
}

//update department
export const updateDepartment = (userId,token,departmentId,data) => {
    console.log(userId,token,departmentId,data)
    return fetch(`http://localhost:8000/api/department/updatedepartment/${userId}/${departmentId}`,
        {
            method:"PUT",
            headers:{
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`     
            },
            body:JSON.stringify(data)
          })
}

//delete department
export const deleteDepartment = (userId,token,departmentId) => {
    
    return fetch(`http://localhost:8000/api/department/deletedepartment/${userId}/${departmentId}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then(response=> {
        response.json()
    }).catch(err=>{
        console.log(err)
    })
}
