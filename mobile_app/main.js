/*
var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});
*/






const mylinks = ["foodselected/egg.html","foodselected/jellies.html","foodselected/melon.html","foodselected/mozarella.html","foodselected/blini.html",]














let slideIndex = 1;
showSlides(slideIndex);

/* Next/previous controls*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* Thumbnail image controls*/
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  mylink = mylinks[slideIndex-1];
}



function bliniCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.blinicount) {
      localStorage.blinicount = Number(localStorage.blinicount)+1;
    } else {
      localStorage.blinicount = 1;
    }
    document.getElementById("result").innerHTML = "This food has " + localStorage.blinicount + " like(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function eggCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.eggcount) {
      localStorage.eggcount = Number(localStorage.eggcount)+1;
    } else {
      localStorage.eggcount = 1;
    }
    document.getElementById("result").innerHTML = "This food has " + localStorage.eggcount + " like(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "This food has " + localStorage.clickcount + " like(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
