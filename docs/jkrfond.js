
function myMap()
{
  myCenter=new google.maps.LatLng(41.878114, -87.629798);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}


$(document).ready(function(){
 // Add smooth scrolling to all links in navbar + footer link
 $(".navbar a, footer a[href='jkrfond.html']").on('click', function(event) {

 // Make sure this.hash has a value before overriding default behavior
 if (this.hash !== "") {

   // Prevent default anchor click behavior
   event.preventDefault();

   // Store hash
   var hash = this.hash;

   // Using jQuery's animate() method to add smooth page scroll
   // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
   $('html, body').animate({
     scrollTop: $(hash).offset().top
   }, 900, function(){

     // Add hash (#) to URL when done scrolling (default click behavior)
     window.location.hash = hash;
     });
   } // End if
 });
})



// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}


<!--
To use this code on your website, get a free API key from Google.
Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
-->
