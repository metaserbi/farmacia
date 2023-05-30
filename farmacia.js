/*reveal*/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  /*pedir0*/
  var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

/*pedir1*/
var btnAbrirPopup1 = document.getElementById('btn-abrir-popup1'),
	overlay1 = document.getElementById('overlay1'),
	popup1 = document.getElementById('popup1'),
	btnCerrarPopup1 = document.getElementById('btn-cerrar-popup1');

btnAbrirPopup1.addEventListener('click', function(){
	overlay1.classList.add('active');
	popup1.classList.add('active');
});

btnCerrarPopup1.addEventListener('click', function(e){
	e.preventDefault();
	overlay1.classList.remove('active');
	popup1.classList.remove('active');
});

/*pedir2*/
var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
	overlay2 = document.getElementById('overlay2'),
	popup2 = document.getElementById('popup2'),
	btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');

btnAbrirPopup2.addEventListener('click', function(){
	overlay2.classList.add('active');
	popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(e){
	e.preventDefault();
	overlay2.classList.remove('active');
	popup2.classList.remove('active');
});

/*pedir3*/
var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
	overlay3 = document.getElementById('overlay3'),
	popup3 = document.getElementById('popup3'),
	btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');

btnAbrirPopup3.addEventListener('click', function(){
	overlay3.classList.add('active');
	popup3.classList.add('active');
});

btnCerrarPopup3.addEventListener('click', function(e){
	e.preventDefault();
	overlay3.classList.remove('active');
	popup3.classList.remove('active');
});

/*pedir4*/
var btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
	overlay4 = document.getElementById('overlay4'),
	popup4 = document.getElementById('popup4'),
	btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4');

btnAbrirPopup4.addEventListener('click', function(){
	overlay4.classList.add('active');
	popup4.classList.add('active');
});

btnCerrarPopup4.addEventListener('click', function(e){
	e.preventDefault();
	overlay4.classList.remove('active');
	popup4.classList.remove('active');
});
/*pedir5*/
var btnAbrirPopup5 = document.getElementById('btn-abrir-popup5'),
	overlay5 = document.getElementById('overlay5'),
	popup5 = document.getElementById('popup5'),
	btnCerrarPopup5 = document.getElementById('btn-cerrar-popup5');

btnAbrirPopup5.addEventListener('click', function(){
	overlay5.classList.add('active');
	popup5.classList.add('active');
});

btnCerrarPopup5.addEventListener('click', function(e){
	e.preventDefault();
	overlay5.classList.remove('active');
	popup5.classList.remove('active');
});
/*pedir6*/
var btnAbrirPopup6 = document.getElementById('btn-abrir-popup6'),
	overlay6 = document.getElementById('overlay6'),
	popup6 = document.getElementById('popup6'),
	btnCerrarPopup6 = document.getElementById('btn-cerrar-popup6');

btnAbrirPopup6.addEventListener('click', function(){
	overlay6.classList.add('active');
	popup6.classList.add('active');
});

btnCerrarPopup6.addEventListener('click', function(e){
	e.preventDefault();
	overlay6.classList.remove('active');
	popup6.classList.remove('active');
});
/*pedir7*/
var btnAbrirPopup7 = document.getElementById('btn-abrir-popup7'),
	overlay7 = document.getElementById('overlay7'),
	popup7 = document.getElementById('popup7'),
	btnCerrarPopup7 = document.getElementById('btn-cerrar-popup7');

btnAbrirPopup7.addEventListener('click', function(){
	overlay7.classList.add('active');
	popup7.classList.add('active');
});

btnCerrarPopup7.addEventListener('click', function(e){
	e.preventDefault();
	overlay7.classList.remove('active');
	popup7.classList.remove('active');
});
/*pedir8*/
var btnAbrirPopup8 = document.getElementById('btn-abrir-popup8'),
	overlay8 = document.getElementById('overlay8'),
	popup8 = document.getElementById('popup8'),
	btnCerrarPopup8 = document.getElementById('btn-cerrar-popup8');

btnAbrirPopup8.addEventListener('click', function(){
	overlay8.classList.add('active');
	popup8.classList.add('active');
});

btnCerrarPopup8.addEventListener('click', function(e){
	e.preventDefault();
	overlay8.classList.remove('active');
	popup8.classList.remove('active');
});


 