// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
var slideIndex = 1;
showSlides(slideIndex);



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}


$(document).ready(function(){


 





jQuery('.photo-thumbnails .thumbnail').click(function() {
        jQuery('.photo-thumbnails .thumbnail').removeClass('current');
        jQuery(this).addClass('current');
        var path = jQuery(this).find('img').attr('src');
        jQuery('#big-photo img').attr('src', path);
    });


document.getElementById('.links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};


blueimp.Gallery(
    document.getElementById('links').getElementsByTagName('a'),
    {
        container: '#blueimp-gallery-carousel',
        carousel: true
    }
);
  
$('.btn-send').click(function() {
  preventDefault();
  $('#hello').append(' world!');
});

  
});












