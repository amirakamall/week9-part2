var signupName1 = document.getElementById('signupName');
var signupEmail1 = document.getElementById('signupEmail');
var signupPassword1 = document.getElementById('signupPassword');
var personsData=[];
if(localStorage.getItem('allpersonsData')){
    personsData=JSON.parse(localStorage.getItem('allpersonsData'));
    console.log(personsData)
}
function signinButton(){
var signinEmail=document.getElementById('signinEmail').value;
var signinPassword=document.getElementById('signinPassword').value;
var textForm =document.getElementById('textForm');
if (signinEmail === "" && signinPassword ==="") {
    textForm.textContent = "All inputs is required";

    return;
}

if (personsData.includes(signinEmail) && personsData.includes(signinPassword)) {
    textForm.textContent = "هذه البيانات مسجلة بالفعل.";
    // window.location.href = "home.html";
    
}

 else {
    personsData.push(signinEmail); 
    personsData.push(signinPassword);
    sessionStorage.setItem('allpersonsData',JSON.stringify(personsData))
    textForm.textContent = "Success";
    window.location.href = "home.html";

}
}
var personsData2=[];
function signupButton(){
   var signupName = document.getElementById('signupName').value;
   var signupEmail = document.getElementById('signupEmail').value;
   var signupPassword = document.getElementById('signupPassword').value;
var textForm = document.getElementById('textForm');
if (signupName === "" && signupEmail ==="" && signupPassword ==="") {
    textForm.textContent = "All inputs is required";
    return;
}

if (personsData2.includes(signupName) && personsData2.includes(signupEmail) && personsData2.includes(signupPassword)) {
    textForm.textContent = "هذه البيانات مسجلة بالفعل.";
} else {
    personsData2.push(signupName); 
    personsData2.push(signupEmail);
    personsData2.push(signupPassword);
    sessionStorage.setItem('allpersonsData2',JSON.stringify(personsData2))
    textForm.textContent = "Success";
    window.location.href = "home.html";
}

}
function logoutUser() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
function isPNameValid(nameValue){
    var personsNameRegex=/^[A-Z].{2,10}$/
    if(personsNameRegex.test(nameValue)){
        signupName1.classList.remove('is-invalid')
        signupName1.classList.add('is-valid')
    }else{
        signupName1.classList.remove('is-valid')
        signupName1.classList.add('is-invalid')
    }
}
function isPPasswordValid(passwordValue){
    var personspasswordRegex=/^[0-9]{7}$/
    if(personspasswordRegex.test(passwordValue)){
       
        signupPassword1.classList.remove('is-invalid')
        signupPassword1.classList.add('is-valid')
    }else{

        signupPassword1.classList.remove('is-valid')
        signupPassword1.classList.add('is-invalid')
    }
}

