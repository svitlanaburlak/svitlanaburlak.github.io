const slides = {

    sliderSections: [
        'header_intro',
        'header_nav',
        'main_formation',
        'main_experience',
        'main_skills',
        'main_hobby',
        'footer_contacts',
    ],
    
    init: function(){
        // add event listener to scroll
        window.addEventListener("scroll", slides.reveal);
        
    },

    reveal: function () {
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

    
}