let emaillogin = document.getElementById("email-login");
let pwdlogin = document.getElementById("pwd-login");

const checklogg = () =>{

    if(localStorage.getItem('id')){
        document.querySelector('.login').style.display = 'none'; 
        document.querySelector('.logout').style.display = 'inline'; 
    }
    else{
        document.querySelector('.login').style.display = 'inline'; 
        document.querySelector('.logout').style.display = 'none'; 
    }
}



const validatelform = (event) =>{
  
    event.preventDefault();
    let check1 =true;
    let emailloginvalue = emaillogin.value.trim();
    let pwdloginvalue = pwdlogin.value.trim();
  
    if(emailloginvalue===""){
        alert("names are required");
        check1=false
    }
    if(pwdloginvalue===""){
       alert("password are required");
        check1=false
    }
    if(check1===true){
        
     login(emailloginvalue,pwdloginvalue);
    }


}
async function login(emailloginvalue, pwdloginvalue) {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: emailloginvalue,
          pwd: pwdloginvalue,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      });
      const json = await response.json();
      console.log(json);
  
      let currentuser = json.user;
    localStorage.setItem('id', currentuser.id);
    localStorage.setItem('nationalId', currentuser.nationalId);
    localStorage.setItem('role', currentuser.role);
    localStorage.setItem('token', json.accesstoken);
  
       window.location.href="../index.html"
    } catch (error) {
      console.error('Error during login:', error);
      // Handle errors as needed
    }
  }