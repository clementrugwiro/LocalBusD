



let form = document.getElementById("form");
let Aname = document.getElementById("con-name");
let email = document.getElementById("con-email");
let subject = document.getElementById("con-subject");
let msg = document.getElementById("con-msg");
let form1 =document.getElementById("login-form")
let form2 = document.getElementById("form-art");
let Atitle= document.getElementById("a-title");
let article= document.getElementById("article");
let form3 = document.getElementById("pers-form");
let pname = document.getElementById("p-name");
let puname = document.getElementById("p-uname");
let paddress = document.getElementById("p-address")
let pjob = document.getElementById("p-job");
let pperoid = document.getElementById("p-peroid");
let pemail = document.getElementById("p-email");
let pphone= document.getElementById("p-phone");
let form4 =document.getElementById("reg-form");
let fname =document.getElementById("fname");
let lname =document.getElementById("lname");
let Uname = document.getElementById("Uname");
let uemail = document.getElementById("U-email");
let fcmt = document.getElementById("fcmt");
let txtcmt = document.getElementById("commenttxt");


let upwd = document.getElementById("upwd");
let repwd = document.getElementById("re-pwd");
let currentuser ;




let validaterform =() =>{
    let check4 = true;
    fnamevalue = fname.value.trim();
    lnamevalue = lname.value.trim();
    Unamevalue =Uname.value.trim();
    uemailvalue = uemail.value.trim();
    upwdvalue = upwd.value.trim();
    repwdvalue = repwd.value.trim();

    if(fnamevalue===""){
        setError(fname,"required");
        check4=false;
    }
    else{
        setsucces(fname);
        
    }
    if(lnamevalue===""){
        setError(lname,"required");
        check4=false;
    }
    else{
        setsucces(lname);    
    }
    if(Unamevalue===""){
        setError(Uname,"required");
        check4=false;
    }
    else{
        setsucces(Uname);
        
    }
    if(uemailvalue===""){
        setError(uemail,"required");
        check4=false;
    }
    else{
        setsucces(uemail);
        
    }
    if(upwdvalue===""){
        setError(upwd,"required");
        check4=false;
    }
    else{
        setsucces(upwd);
        
    }
    if(repwdvalue===""){
        setError(repwd,"required");
        check4=false;
    }
    else if(repwdvalue!=upwdvalue){
        setError(repwd,"doesn't match");
        check4=false; 
    }
    else{
        setsucces(repwd);
        
    }
    if(check4===true){
        console.log("checked everything")
        register(fnamevalue,lnamevalue,Unamevalue,uemailvalue,upwdvalue);
        // location.reload();
    }

}

const validatepform = ()=>{
    let check3 = true;
    let pnamevalue = pname.value.trim();
    let punamevalue = puname.value.trim();
    let paddressvalue =paddress.value.trim();
    let pjobvalue = pjob.value.trim();
    let pperoidvalue =pperoid.value.trim();
    let pemailvalue =pemail.value.trim();
    let pphonevalue =pphone.value.trim();

    
    if(pnamevalue===""){
        setError(pname,"required");
        check3=false;
    }
    else{
        setsucces(pname);
        
    }
    if(punamevalue===""){
        setError(puname,"required");
        check3=false;
    }
    else{
        setsucces(puname);
        
    }
    if(paddressvalue===""){
        setError(paddress," required");
        check3=false;
    }
    else{
        setsucces(paddress);
        
    }
    if(pjobvalue===""){
        setError(pjob," required");
        check3=false;
    }
    else{
        setsucces(pjob);
        
    }
    if(pperoidvalue===""){
        setError(pperoid," required");
        check3=false;
    }
    else{
        setsucces(pperoid);
        
    }
    if(pphonevalue===""){
        setError(pphone,"  required");
        check3=false;
    }
    else{
        setsucces(pphone);
        
    }
    if(pemailvalue===""){
        setError(pemail,"required");
        check=false;
    }
    else if(!validemail(pemailvalue)){
        setError(pemail,"enter a valid email");
        check=false;
    }
    else{
        setsucces(pemail)
        
    }
}

const validateaform =() =>{
    let check2 = true;
    let Atitlevalue = Atitle.value.trim();
    let articlevalue = article.value.trim();

    if(Atitlevalue===""){
        setError(Atitle,"a title is required");
        check2=false;
    }
    else{
        setsucces(Atitle);
        
    }
    if(articlevalue===""){
        setError(article,"article is required");
        check2=false
    }
    else if(articlevalue.length<100){
        setError(article,"article must be more than 100");
        check2=false
    }
    else{
        setsucces(article);
       
    }
    if(check2===true){
       console.log("everything is correct");
       createart()
       location.reload();
    }

}


const validatefcmt =() =>{
    let check1 =true;
    let cmtvalue = txtcmt.value.trim()
    let cmtbtnvalue = document.getElementById("sendcmt").value.trim()
    
    if(cmtvalue===""){
        setError(txtcmt,"comment is required");
        check1=false
    }
    else{
        setsucces(txtcmt);
    }
    if(check1===true){
        console.log(cmtvalue,cmtbtnvalue);
       }
}


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

checkrole = () =>{
    if(localStorage.role ==="admin"){
        alert("admin page!")
        window.location.href="./admin.html"
    
    }
    else{
        alert("no admin permission")
        window.location.href="../index.html"
    }
}


if(document.querySelector("fcmt")!=null){
    document.querySelector("fcmt").addEventListener('submit', e =>{
        e.preventDefault();
        validatefcmt();
        console.log("you got here.")
    })
}

if(form!=null){
form.addEventListener('submit', e =>{
    e.preventDefault();
    validateform();
})
}
if(form1!=null){
form1.addEventListener('submit', e =>{
    e.preventDefault();
    validatelform();
})
}
if(form2!=null){
    form2.addEventListener('submit', e =>{
        e.preventDefault();
        validateaform();
    })
    }
if(form3!=null){
    form3.addEventListener('submit', e =>{
    e.preventDefault();
    validatepform();
    }) 
}
if(form4!=null){
    form4.addEventListener('submit', e =>{
    e.preventDefault();
    validaterform();
    }) 
}

const validemail = email =>{
    const re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}
const setError= (element,message)=>{
    const inputcontrol = element.parentElement;
    const errordisplay =  inputcontrol.querySelector(".error")

    errordisplay.innerText=message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}

const setsucces = (element) =>{
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.querySelector(".error");

    errordisplay.innerText ='';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

const validateform = () =>{
    let namevalue =Aname.value.trim();
    let emailvalue = email.value.trim();
    let subjectvalue = subject.value.trim();
    let msgvalue = msg.value.trim();
    let check = true
    

    if(namevalue===""){
        setError(Aname,"names are required");
        check=false
    }
    else{
        setsucces(Aname);
        
    }
    if(emailvalue===""){
        setError(email,"email is required");
        check=false;
    }
    else if(!validemail(emailvalue)){
        setError(email,"enter a valid email");
        check=false;
    }
    else{
        setsucces(email)
        
    }
    if(subjectvalue===""){
        setError(subject,"subject is required");
        check=false;
    }
    else{
        setsucces(subject)
        
    }
    if(msgvalue===""){
        setError(msg,"message is required");
        check=false;
    }
    else{
        setsucces(msg)
        check=true;
    }
    if(check===true){
        sendmsg(namevalue,emailvalue,subjectvalue,msgvalue)
        
    }
}


// register api fetch
async function register(fnamevalue,lnamevalue,Unamevalue,uemailvalue,upwdvalue){ 
 fetch("https://blog-portfolio-apis.herokuapp.com/api/add-users", {
         method:"POST",
         body:JSON.stringify({
         firstname: fnamevalue,
         lastname: lnamevalue,
         username: Unamevalue,
         email:uemailvalue,
         pwd: upwdvalue,
           }),
             headers:{
               "content-type":"application/json; charset=UTF-8" 
         }
      })
     .then(response=>response.json())
     .then(json=>{
         console.log(json)
         window.location.href="../login.html"
        })
 }
 // login api fetch
 async function login(emailloginvalue,pwdloginvalue){
 fetch("https://blog-portfolio-apis.herokuapp.com/api/login", {
         method:"POST",
         body:JSON.stringify({
         email:emailloginvalue,
         pwd: pwdloginvalue,
           }),
             headers:{
               "content-type":"application/json; charset=UTF-8" 
         }
      })
     .then(response=>response.json())
     .then(json=>{
       console.log("u here")
        console.log(json.user)
        console.log(json)
     currentuser = json.user;
     token =json.accesstoken;   
     console.log(currentuser)
     localStorage.setItem('id',currentuser.id);
     localStorage.setItem('email',currentuser.email);
     localStorage.setItem('role',currentuser.role);
     localStorage.setItem('token',token)
    
     window.location.href="../index.html"
     })  
 }
 //like api fetch
 async function like(articleid){ 
    //  console.log("you got in here",currentuser.id)
    let params = articleid
    let auth = 'Bearer '+localStorage.token
    console.log(auth)
        
    const url = `https://blog-portfolio-apis.herokuapp.com/api/articles-like/${params.toString() }`
    fetch( url, {
            method:"POST",
            body:JSON.stringify({
            authorId: localStorage.getItem('id'),
              }),
                headers:{
                    'Authorization' : auth,
                  "content-type":"application/json; charset=UTF-8" 
            }
         })
        .then(response=>response.json())
        .then(json=>console.log(json))
    }
//dislike api fetch
async function dislike(articleid){ 
    //  console.log("you got in here",currentuser.id)
    let params = articleid
    let auth = 'Bearer '+localStorage.token
        
    const url = `https://blog-portfolio-apis.herokuapp.com/api/articles-dislike/${params.toString() }`
    fetch( url, {
            method:"POST",
            body:JSON.stringify({
            authorId: localStorage.getItem('id'),
              }),
                headers:{
                    'Authorization' : auth,
                  "content-type":"application/json; charset=UTF-8" 
            }
         })
        .then(response=>response.json())
        .then(json=>console.log(json))
    } 
//comment api fetch
async function comment(cmttxt,articleid){ 
     console.log("you got in here",currentuser.id)
    let params = articleid
    let auth = 'Bearer '+localStorage.token
        
    const url = `https://blog-portfolio-apis.herokuapp.com/api//articles-comment//${params.toString() }`
    fetch( url, {
            method:"POST",
            body:JSON.stringify({
            authorId: localStorage.getItem('id'),
            commenttxt:cmttxt,

              }),
                headers:{
                    'Authorization' : auth,
                  "content-type":"application/json; charset=UTF-8" 
            }
         })
        .then(response=>response.json())
        .then(json=>console.log(json))
    }
//logging out
    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        localStorage.removeItem('role')
        localStorage.removeItem('nationalID')
        window.location.href="../index.html"  
    }
// sending message api fetch
async function sendmsg(namevalue,uemailvalue,subjectvalue,msgvalue){ 
    fetch("https://blog-portfolio-apis.herokuapp.com/api/messages", {
            method:"POST",
            body:JSON.stringify({
            uname: namevalue,
            email:uemailvalue,
            subject: subjectvalue,
            message: msgvalue,
              }),
                headers:{
                  "content-type":"application/json; charset=UTF-8" 
            }
         })
        .then(response=>response.json())
        .then(json=>{
            console.log(json)
            alert('your message was sent')
            location.reload();
           })
    }
// deleting messages
async function deletemsg(msgid){ 
    let params = msgid
    let auth = 'Bearer '+localStorage.token
        
    const url = `https://blog-portfolio-apis.herokuapp.com/api/messages/${params.toString() }`
    fetch( url, {
            method:"DELETE",
                headers:{
                    'Authorization' : auth,
                    "content-type":"application/json; charset=UTF-8" 
            }
            })
        // .then(response=>response.json())
        .then(json=>{
            alert("message was deleted.")
            console.log(json)
        })
    } 
//deleting an article
async function deleteart(artid){ 
        let params = artid
        let auth = 'Bearer '+localStorage.token
            
        const url = `https://blog-portfolio-apis.herokuapp.com/api/del-articles/${params.toString() }`
        fetch( url, {
                method:"DELETE",
                    headers:{
                        'Authorization' : auth,
                        "content-type":"application/json; charset=UTF-8" 
                }
                })
            // .then(response=>response.json())
            .then(json=>{
                alert("article was deleted.")
                console.log(json)
            })
    } 
//deleting a user
async function deleteuser(artid){ 
    let params = artid
    let auth = 'Bearer '+localStorage.token
        
    const url = `https://blog-portfolio-apis.herokuapp.com/api/del-users/${params.toString() }`
    fetch( url, {
            method:"DELETE",
                headers:{
                    'Authorization' : auth,
                    "content-type":"application/json; charset=UTF-8" 
            }
            })
        // .then(response=>response.json())
        .then(json=>{
            alert("user was deleted.")
            console.log(json)
        })
} 