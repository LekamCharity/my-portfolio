function addClassOnScroll(elementID,classToAdd) {
    let element = document.getElementById(elementID)
    let elementPosition = element.offsetTop -70;
    if (window.pageYOffset > elementPosition -(element.offsetHeight/2)) {
      element.classList.add(classToAdd)
    } else if(window.pageYOffset <elementPosition+element.offsetHeight) {
      element.classList.remove(classToAdd);
    }
  }
  window.onscroll = function(){
    addClassOnScroll('header','sticky');
    addClassOnScroll('fluency','is-visible');
    addClassOnScroll('projects','is-visible');
    addClassOnScroll('contact-me','is-visible');
    };

