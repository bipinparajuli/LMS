
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