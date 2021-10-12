/* OPRETTELSE AF GLOBALE VARIABLER  */
let i = 0;
let timer = 3000;  /* ANGIVET I MILLISEKUNDER  */
let images = [];

/* BILLEDER OPRETTES I RÆKKEFØLGE. HER KAN MAN OGSÅ ÆNDRE BILLEDERNE */
images[0] = "assets/images/Biograf1.png";
images[1] = "assets/images/Biograf2.png";
images[2] = "assets/images/Sal01.png";
images[3] = "assets/images/mennekser.png";
images[4] = "assets/images/Cafe01.png";

/* FUNKTION TIL AT UDFØRE SLIDER OPRETTES */
function changeImg() {
    /* GÅR IND OG FINDER ELEMENTET MED SLIDER CARDS
    BAGEFTER SIGER DEN AT SRC SKAL VÆRE LIGMED IMGS ARRAY */
  document.getElementById("slider").src = images[i];

  /* HVIS IMG ER MINDRE IND 4 SKAL DEN LÆGGE 1 TIL. 
  DET VIL SIGE DEN GÅR FRA BILLEDE 1 (INDEX 0) TIL BILLEDE 5 (INDEX 4)*/
  if (i < 4) {
    i++;
    /* DA DER KUN ER OP TIL INDEX 4 (BILLEDE 5) SKAL DEN SIGE AT INDEX ER 
    LIGMED 0 SOM GØR DEN GÅR TILABGE TIL BILLEDE 1 (INDEX 0) */
  } else {
    i = 0;
  }

  /* DEN BLIVER SAT SAMMEN MED TIMEREN SOM ER 3 SEKUNDER PR BILLEDE */
  setTimeout("changeImg()", timer);
}

/* ONLOAD OPRETTES */
window.onload = changeImg();





//BestilBillet  Accordion
const btn = document.querySelectorAll(".btn")
const msg = document.querySelectorAll(".hidden-msg")
 
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click" , (event) => {
        event.preventDefault();
        event.target.parentNode.parentNode.parentNode.querySelector(".hidden-msg").classList.toggle("active")
    })
}

//BestilBillet Betalning
const payBtn = document.querySelector('#SndBtn');
 
payBtn.onclick = function() {
    let result = true;
 
    const inputElements = document.querySelectorAll('input');
    const errorWrapper = document.querySelector('#error-wrapper');
 
 
    for(let element of inputElements) {
        if(!element.value) {
            if(element.id === "name") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet navn';
            }
            if(element.id === "email") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet email';
            }
            if(element.id === "Telfnumber") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet telefon nummer';
            }
 
            if(element.id === "Kortnumber") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet kortnummer';
            }
 
            if(element.id === "CVVnumber") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet CVV';
            }
 
            if(element.id === "dato") {
                errorWrapper.innerHTML = 'Du skal udfylde udløbsdato for dit kort';
            }
            result = false;
            return false;
        }
        if(result) {
        errorWrapper.innerHTML = 'Billet købt';   
    }
    }
  }
    function payFunction() {
        document.getElementById("myForm").reset();
    }




//Tilmeld
const signUpBtn = document.querySelector('#signupbtn');
signUpBtn.onclick = function() {
    let result = true;

    const inputElements = document.querySelectorAll('input');
    const errorWrapper = document.querySelector('#error-wrapper');


    for(let element of inputElements) {
        if(!element.value) {
            if(element.id === "name") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet Navn';
            }
            if(element.id === "email") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet E-mail';
            }
            if(element.id === "number") {
                errorWrapper.innerHTML = 'Du skal udfylde feltet Telefonnummer';
            }
            if(element.id === "zip") {
              errorWrapper.innerHTML = 'Du skal udfylde feltet Postnummer';
            }
            if(element.id === "city") {
              errorWrapper.innerHTML = 'Du skal udfylde feltet By';
            }
            result = false;
            return false;
        }
        if(result) {
        errorWrapper.innerHTML = 'Din formular er sendt';   
    }
    }
}
function myFunction() {
    document.getElementById("signUpForm").reset();
}


// Arrangementer







