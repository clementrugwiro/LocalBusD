 async function register(fnamevalue,lnamevalue,Unamevalue,uemailvalue,upwdvalue){
   console.log("you got in the function")
fetch("https://blog-portfolio-apis.herokuapp.com/api/add-users", {
        method:"POST",
        body:JSON.stringify({
        firstname: fnamevalue,
        secondname: lnamevalue,
        username: Unamevalue,
        email:uemailvalue,
        pwd: upwdvalue,
          }),
            headers:{
              "content-type":"application/json; charset=UTF-8" 
        }
     })
    .then(response=>response.json())
    .then(json=>console.log(json))
}