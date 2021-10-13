//tilmeld
const signUpBtn = document.querySelector('#signupbtn');

signUpBtn.onclick = function() {
    let signResult = true;

    const signupInput = document.querySelectorAll('input');
    const signErrorWrapper = document.querySelector('#signError-wrapper');


    for(let element of signupInput) {
        if(!element.value) {
            if(element.id === "name") {
                signErrorWrapper.innerHTML = 'Du skal udfylde feltet navn';
            }
            if(element.id === "email") {
                signErrorWrapper.innerHTML = 'Du skal udfylde feltet email';
            }
            if(element.id === "number") {
                signErrorWrapper.innerHTML = 'Du skal udfylde feltet telefon nummer';
            }
            if(element.id === "zip") {
              signErrorWrapper.innerHTML = 'Du skal udfylde feltet Postnummer';
            }
            if(element.id === "city") {
              signErrorWrapper.innerHTML = 'Du skal udfylde feltet telefon By';
            }
            signResult = false;
            return false;
            }
        if(signResult) {
        signErrorWrapper.innerHTML = 'Din formular er sendt';   
        }
    }
}
function myFunction() {
    document.getElementById("signUpForm").reset();
}