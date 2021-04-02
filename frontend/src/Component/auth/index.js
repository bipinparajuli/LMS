
export const Authenticate = (data,next) =>{
if(window !== undefined)
{
    localStorage.setItem("jwt",JSON.stringify(data));
    next();
}

}

export const isAuthenticate = () => {
if(typeof window == "undefined")
{
    return false
}

    if(localStorage.getItem("jwt"))
    {
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else return false
}

export const signout = (next) => {
 if(typeof window !== "undefined")
 {
     localStorage.removeItem("jwt");
    //  next();

     return fetch(`http://localhost:8000/api/signout`,{
         method:"GET"
     }).then(e => console.log("signout successfuly"))
 }   
}