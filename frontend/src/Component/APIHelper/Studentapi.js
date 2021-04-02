export const getStudentById =(studentid) => {
    return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/student/${studentid}`,{
        method:"GET"
    }).then(response => {return response.json()})
    .catch(err => console.log(err))
}


    export const updateStudent = (uid,sid,token,data) => {
        console.log(data)
        return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/student/updatestudent/${uid}/${sid}`
        ,{
          method:"PUT",
          headers:{
       "Content-Type":"application/json",
       "Authorization":`Bearer ${token}`     
          },
          body:JSON.stringify(data)
        })
      }

      export const searcStudentByName = (name)=> {
        return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/search/student/${name}`,
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
      