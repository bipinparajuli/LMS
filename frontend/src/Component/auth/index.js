
export const Authenticate = (data,next) =>{
if(window !== undefined)
{
    localStorage.setItem("jwt",JSON.stringify(data));
    next();
}

}

export const isAuthenticate = () => {
// console.log(localStorage.getItem("jwt"))
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

     return fetch(`https://mysterious-woodland-24801.herokuapp.com/api/signout`,{
         method:"GET"
     }).then(e => console.log("signout successfuly"))
 }   
}