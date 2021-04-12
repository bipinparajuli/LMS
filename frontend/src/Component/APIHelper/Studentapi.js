export const getStudentById =(studentid) => {
    return fetch(`http://localhost:8000/api/student/${studentid}`,{
        method:"GET"
    }).then(response => {return response.json()})
    .catch(err => console.log(err))
}


    export const updateStudent = (uid,token,data) => {
        console.log(data)
        return fetch(`http://localhost:8000/api/student/updatestudent/${uid}`
        ,{
          method:"PUT",
          headers:{
       "Content-Type":"application/json",
       "Authorization":`Bearer ${token}`     
          },
          body:JSON.stringify(data)
        })
      }

      export const searchStudentByName = (name)=> {
        return fetch(`http://localhost:8000/api/search/student/${name}`,
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
      