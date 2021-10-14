//BestilBillet  Accordion
const btn = document.querySelectorAll(".btn")
const msg = document.querySelectorAll(".hidden-msg")
 
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click" , (event) => {
        event.preventDefault();
        event.target.parentNode.parentNode.parentNode.querySelector(".hidden-msg").classList.toggle("active")
    })
}

// SEAT SELECTION
 
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
 
populateUI();
 
 
//class der hedder movie + value som bliver lagt til ticket price
let ticketPrice = +movieSelect.value;
 
//save selected movie index and price
function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}
 
//update total and count
function updateSelectedCount() {
  //OBS! må ikke være mellemrum mellem seat og selected da det er to classes på samme element
  const selectedSeats = document.querySelectorAll('.row .seat.selected'); 
  //konverterer en node list til et array 
  const seatsIndex =
  // [... =beskriver at det er et array og punktummerne konverterer nodeListen
  [...selectedSeats].map(seat =>
  [...seats].indexOf(seat));
  //gemmer data i local storage selectedSeats 
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
 
  const selectedSeatsCount = selectedSeats.length;
 
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
//get data from UI and populate it
 
function populateUI() {
  //alle de sæder der bliver valgt hentes fra local storage (den kører igennem JSON.parse)
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if(selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat,index) => {
      //fordi det er et array skal den derfor være -1 
      if(selectedSeats.indexOf(index)> -1){
        seat.classList.add('selected');
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if(selectedMovieIndex !== null){
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}
 
//movie select event
movieSelect.addEventListener('change', e =>{
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});
 
//seat click event
//e = event
container.addEventListener('click', e =>{
  if(
    e.target.classList.contains('seat')&&
    !e.target.classList.contains('occupied')
  ){
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});
 
//initial count and total set
updateSelectedCount();

//dette gør at de valgt sæder bliver nulstillet
//da ens valg bliver gemt lokalt
localStorage.clear();

//bestil billet betaltning
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
            if(element.id === "Telefonnummer") {
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

