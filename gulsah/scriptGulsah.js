
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function displayNumber(){
    var pNumber = "065/776-814";
    document.getElementById("outputField").innerHTML = pNumber;
}

function displayFax(){
    var fax = "033/014-377";
    document.getElementById("outputField").innerHTML = fax;
}

function displaySocials(){
    var socials = "Facebook: Gulsah" + "<br></br>" + "Instagram: @Gulsah";
    document.getElementById("outputField").innerHTML = socials;
}

function displayAddress(){
    var address = "Crkvice 1B" + "<br></br>" + "Zenica 71000";
    document.getElementById("outputField").innerHTML = address;
}

